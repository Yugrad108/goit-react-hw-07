// Імпортуємо функцію для створення магазину redux
import { configureStore } from "@reduxjs/toolkit";
// Імпортуємо редюсери для контактів та фільтрів
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

// Створюємо store, передаємо об'єкт з редюсерами
export const store = configureStore({
  // ключ - ім'я редюсера, значення - сам редюсер
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
