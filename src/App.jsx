import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Layout/Header";
import CreateThunk from "./Redux-thunk/Crud/CreateThunk";
import View from "./Redux-thunk/Crud/View";
import Update from "./Redux-thunk/Crud/Update";
import Signupform from "./Redux-thunk/forms/Signupform";
import LoginForm from "./Redux-thunk/forms/LoginForm";
import { auth } from "./Redux-thunk/FireStore";
import SingleUser from "./Redux-thunk/Crud/SingleUser";

function App() {
  const [user, SetUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      SetUser(user);
    });
  },[]);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/CreateThunk" /> : <LoginForm />}
          />
          <Route path="/CreateThunk" element={<CreateThunk />} />
          <Route path="/View" element={<View />} />
          <Route path="/Update/:id" element={<Update />} />
          <Route path="/signup" element={<Signupform />} />
          <Route path="/SingleView/:id" element={<SingleUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
