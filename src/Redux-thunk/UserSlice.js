import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dbFire from "./FireStore";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";

const initialState = {
  userList: []
};

// Add User
export const addUser = createAsyncThunk('user/addUser', async (data) => {
  const res = await addDoc(collection(dbFire, "Users"), data);
  const newUser = {
    id: res.id,
    ...data
  }
  return newUser;
});

// Delete User
export const deleteUser = createAsyncThunk('user/deleteUser', async (Userid) => {
  // alert(Userid)
  await deleteDoc(doc(dbFire, "Users", Userid)); // Correction here
  return Userid;
});

// View Users
export const ViewUser = createAsyncThunk('user/ViewUser', async () => {
  const res = await getDocs(collection(dbFire, "Users"));
  const userList = [];
  res.forEach((doc) => {
    userList.push({ id: doc.id, ...doc.data() });
  });
  return userList;
});

// User Slice
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.fulfilled, (state, action) => {
        state.userList.push(action.payload);
      })
      .addCase(ViewUser.fulfilled, (state, action) => {
        state.userList = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => { // Correction here
        const id = action.payload;
        state.userList = state.userList.filter((user) => user.id !== id);
      });
  },
});

export default userSlice.reducer;
