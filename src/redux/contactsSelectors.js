import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "./filtersSlice";
import { slice } from "./contactsSlice";

// Селектор для отримання контактів з redux-сторе
export const selectContacts = (state) => state.contacts.items;
// Експорт екшен-креаторів для додавання та видалення контактів
export const { addContact, deleteContact } = slice.actions;

// Селектор для отримання статусу завантаження контактів
export const selectIsLoading = (state) => state.contacts.loading;
// Селектор для отримання повідомлення про помилку
export const selectError = (state) => state.contacts.error;

// Селектор, який фільтрує контакти за допомогою фільтра імені
// з урахуванням регістру
export const selectFilteredContacts = createSelector(
  // Маємо два аргументи: масив контактів та фільтр імені
  [selectContacts, selectNameFilter],
  // Функція, яка фільтрує контакти
  (contacts, filters) => {
    // Фільтруємо контакти, щоб вони відповідали фільтру імені
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filters.toLowerCase())
    );
  }
);
