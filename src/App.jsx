import ContactList from "./components/ContactList/ContactList/";
import { wrapper, title, innerwrapper } from "./App.module.css";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div className={wrapper}>
      <div className={innerwrapper}>
        <h1 className={title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  );
}

export default App;
