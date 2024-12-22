import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  patchContact,
} from "./operations";
import toast from "react-hot-toast";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;

  toast.error(`Error: ${action.payload}`);
};

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;

        state.items = action.payload;
      })
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;

        state.items.push(action.payload);

        toast.success("Added a contact");
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;

        const indexToDelete = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(indexToDelete, 1);

        toast.success("Deleted a contact");
      })
      .addCase(patchContact.pending, handlePending)
      .addCase(patchContact.rejected, handleRejected)
      .addCase(patchContact.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;

        const patchedContactIndex = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );

        state.items[patchedContactIndex] = {
          ...action.payload,
        };
      });
  },
});

export const contactsReducer = slice.reducer;
