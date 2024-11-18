import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dbFire from "./FireStore";
import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";

const initialState = {
  userList: [],
};

export const addUser=createAsyncThunk('user/addUser',async(data)=>{
  const res = await addDoc(collection(dbFire,"Users"),data)
  // console.log(res.data());
  const newUser = {
    id:res.id,
    ...data
  }
  return newUser
})
export const ViewUser = createAsyncThunk('user/ViewUser',async()=>{
  const res =await getDocs(collection(dbFire,"Users"))
  res.forEach((doc)=>{
    // console.log("View",doc.data());
    userList.push({id:doc.id,...doc.data()})
  })
  return userList
})

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(addUser.fulfilled, (state, action) => {
      state.userList.push(action.payload);    
      console.log(state);
    })
    .addCase(ViewUser.fulfilled,(state,action)=>{
        state.userList = action.payload
    })
  },
});
export default userSlice.reducer