import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import PosSystem from "../pages/POS/PosSystem";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pos" element={<PosSystem />} />
      </Routes>
    </BrowserRouter>
  );
}
