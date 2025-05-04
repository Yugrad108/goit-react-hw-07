/*************  ✨ Windsurf Command 🌟  *************/
import css from "./ErrorMessage.module.css";

// Компонент для відображення повідомлення про помилку
const ErrorMessage = ({ error }) => {
  return (
    <div className={css.error}>
      Oops, something wrong! <br />
      {error}
    </div>
  );
};

export default ErrorMessage;

/*******  bc5d43ec-f720-435b-8c9d-e5bc2bc5991d  *******/
