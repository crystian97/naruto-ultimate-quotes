import { Route, Routes } from "react-router-dom";
import Start from "./Pages/Start";
import Home from "./Pages/Home";
import Quote from "./Pages/Quote";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/home" element={<Home />} />
      <Route path="quote/:char" element={<Quote />} />
      <Route path="*" element={<h2>404 Page not found</h2>} />
    </Routes>
  );
};
