import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

// Функція яка викликається коли почався запит на сервер
const handlePending = (state) => {
  state.loading = true; // встановлюємо флаг очікування
};

// Функція яка викликається коли запит на сервер закінчився з помилкою
const handleRejected = (state, action) => {
  state.loading = false; //  очікування скасовуємо
  state.error = action.payload; // записуємо текст помилки
};

// Функція яка викликається коли запит на сервер закінчився успішно
const handleFulfilled = (state, action) => {
  state.loading = false; //  очікування скасовуємо
  state.error = null; // помилка скасовується
  state.items = action.payload?.sort((a, b) => +b.id - +a.id); // масив контактів сортуємо за id нові потім старі
};

// Функція яка викликається коли запит на додання контакту закінчився успішно
const handleAddFulfilled = (state, action) => {
  state.loading = false; // очікування скасовуємо
  state.error = null; // помилка скасовується
  state.items.unshift(action.payload); // додаємо контакт в початок масиву
};

export const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [], // масив контактів
    loading: false, // очікування
    error: null, // текст помилки
  },

  extraReducers: (builder) => {
    builder
      // Коли почався запит на отримання контактів
      .addCase(fetchContacts.pending, handlePending)
      // Коли запит на отримання контактів закінчився успішно
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      // Коли запит на отримання контактів закінчився з помилкою
      .addCase(fetchContacts.rejected, handleRejected)

      // Коли почався запит на додання контакту
      .addCase(addContact.pending, handlePending)
      // Коли запит на додання контакту закінчився успішно
      .addCase(addContact.fulfilled, handleAddFulfilled)
      // Коли запит на додання контакту закінчився з помилкою
      .addCase(addContact.rejected, handleRejected)

      // Коли почався запит на видалення контакту
      .addCase(deleteContact.pending, handlePending)
      // Коли запит на видалення контакту закінчився успішно
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false; // очікування скасовуємо
        state.error = null; // помилка скасовується
        state.items = state.items.filter((item) => item.id !== action.payload); // видаляємо контакт з масиву
      })
      // Коли запит на видалення контакту закінчився з помилкою
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export default slice.reducer;
