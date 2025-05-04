import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import { form, button, input, errorMessage } from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

// початкові значення для форміки
const initialValues = {
  id: "",
  name: "",
  number: "",
};
// функція для рендеру форми
const ContactForm = () => {
  // унікальні ідентифікатори для полів форми
  const nameFieldId = useId();
  const numberFieldId = useId();
  // посилання на диспетчер для виклику екшен-креаторів
  const dispatch = useDispatch();

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .trim()
      .required("Required"),
    number: Yup.string()
      .matches(/^\d+$/, "Not a number")
      .min(7, "Too Short!")
      .max(9, "Too Long!")
      .required("Required"),
  });

  // Обробник подій для відправлення форми
  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ ...values, id: nanoid() })); // Додаємо контакт з унікальним ідентифікатором
    resetForm(); // Скидаємо форму після відправлення
  };

  return (
    <Formik
      initialValues={initialValues} // Початкові значення для форми
      onSubmit={handleSubmit} // Функція обробки відправлення форми
      validationSchema={ContactFormSchema} // Схема валідації для полів форми
    >
      <Form className={form}>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} className={input} />
          <ErrorMessage name="name" component="div" className={errorMessage} />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="tel"
            name="number"
            id={numberFieldId}
            className={input}
          />
          <ErrorMessage
            name="number"
            component="div"
            className={errorMessage}
          />
        </div>
        <button className={button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
