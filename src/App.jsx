import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ContactList from "./components/ContactList/ContactList/";
import { wrapper, title, innerwrapper } from "./App.module.css";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { fetchContacts } from "./redux/contactsOps";
import { selectIsLoading, selectError } from "./redux/contactsSelectors";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // Виконати запит для отримання контактів при монтуванні компонента
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={wrapper}>
      <div className={innerwrapper}>
        <h1 className={title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
      </div>

      {/* Показати індикатор завантаження, якщо дані завантажуються і немає помилки */}
      {isLoading && !error && <Loader />}
      {/* Показати повідомлення про помилку, якщо виникла помилка */}
      {error && <ErrorMessage error={error} />}
      {/* Показати список контактів, якщо дані завантажені і немає помилки */}
      {!isLoading && !error && <ContactList />}
    </div>
  );
}

export default App;
