import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { list, item } from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSelectors";
// import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const items = useSelector(selectFilteredContacts);
  console.log(items);
  // const filter = useSelector(selectNameFilter);

  // const visibleContacts = items.filter(({ name }) =>
  //   name.toLowerCase().includes(filter.toLowerCase())
  // );
  return (
    <ul className={list}>
      {items.map((contact) => (
        <li key={contact.id} className={item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
