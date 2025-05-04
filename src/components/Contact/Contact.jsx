import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { wrapper, text, button } from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

//Деструктуризація пропсів
const Contact = ({ contact: { name, number, id } }) => {
  // Отримання функції dispatch з Redux для виклику екшен-креаторів для видалення контакту
  const dispatch = useDispatch();
  return (
    <>
      <div className={wrapper}>
        <p className={text}>
          <FaUser
            style={{ marginRight: "10px", width: "20px", height: "20px" }}
          />
          {name}
        </p>
        <p className={text}>
          <FaPhone
            style={{ marginRight: "10px", width: "20px", height: "20px" }}
          />
          {number}
        </p>
      </div>
      <button
        className={button}
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
