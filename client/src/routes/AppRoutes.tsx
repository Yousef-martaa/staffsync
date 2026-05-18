import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import PosSystem from "../pages/POS/PosSystem";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pos" element={<PosSystem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
