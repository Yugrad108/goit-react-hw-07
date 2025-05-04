import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { list, item } from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSelectors";

// Компонент списку контактів
const ContactList = () => {
  // Отримуємо список контактів, які пройшли фільтрацію
  const items = useSelector(selectFilteredContacts);

  return (
    <ul className={list}>
      {items.map((contact) => (
        <li key={contact.id} className={item}>
          {/* Компонент одного контакту */}
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
