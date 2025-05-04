import { useId } from "react";
import { wrapper, input } from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

// Компонент для пошуку контактів
const SearchBox = () => {
  const filterId = useId(); // Створення унікального ID для елемента input
  const value = useSelector(selectNameFilter); // Отримання значення фільтру з Redux
  const dispatch = useDispatch(); // Отримання функції dispatch з Redux

  return (
    <div className={wrapper}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        type="text"
        id={filterId}
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value.trim()))} // Оновлення фільтру при зміні введення
        className={input}
      />
    </div>
  );
};

export default SearchBox;
