/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Notfound from "./pages/NotFound";
import axios from "axios";
import SignUp from "./pages/SignUp";

function App() {
  const [userName, setUserName] = useState("");
  const [state, setstate] = useState(false);

  return (
    <div>
      {" "}
      <Header state={state} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route
          path="/login"
          element={<Login state={state} setstate={setstate} />}
        />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
