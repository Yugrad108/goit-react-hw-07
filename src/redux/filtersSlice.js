import { createSlice } from "@reduxjs/toolkit";

// Створення слайсу для управління фільтрами
const slice = createSlice({
  name: "filters", // Назва слайсу
  initialState: {
    name: "", // Початковий стан фільтру за іменем
  },
  reducers: {
    // Редʼюсер для зміни фільтру
    changeFilter: (state, action) => {
      state.name = action.payload; // Зміна значення фільтру
    },
  },
});

// Селектор для вибору фільтру за іменем
export const selectNameFilter = (state) => state.filters.name;
export const { changeFilter } = slice.actions; // Експорт екшену для зміни фільтру
export default slice.reducer; // Експорт редʼюсера за замовчуванням
