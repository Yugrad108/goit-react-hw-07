import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Базовий URL для запитів до API
const baseURL = "https://6815d14132debfe95dbc8607.mockapi.io";

// Створення екземпляра axios з базовим URL
const api = axios.create({
  baseURL,
});

// Асинхронний запит для отримання всіх контактів
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      // Виконання GET-запиту для отримання контактів
      const res = await api.get("/contacts");
      return res.data; // Повернення даних контактів
    } catch (error) {
      // Повернення повідомлення про помилку
      return rejectWithValue(error.message);
    }
  }
);

// Асинхронний запит для додавання нового контакту
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      // Виконання POST-запиту для додавання контакту
      const res = await api.post("/contacts", contact);
      return res.data; // Повернення доданого контакту
    } catch (error) {
      // Повернення повідомлення про помилку
      return rejectWithValue(error.message);
    }
  }
);

// Асинхронний запит для видалення контакту
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      // Виконання DELETE-запиту для видалення контакту
      await api.delete(`/contacts/${id}`);
      return id; // Повернення ID видаленого контакту
    } catch (error) {
      // Повернення повідомлення про помилку
      return rejectWithValue(error.message);
    }
  }
);
