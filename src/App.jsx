import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import CreateThunk from "./Redux-thunk/Crud/CreateThunk";
import View from "./Redux-thunk/Crud/View";
import Update from "./Redux-thunk/Crud/Update";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CreateThunk />} />
          <Route path="/View" element={<View />} />
          <Route path="/Update/:id" element={<Update />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
