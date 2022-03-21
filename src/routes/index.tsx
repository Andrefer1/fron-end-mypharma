import { Routes as Router, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Categories from "../pages/Categories";
import Brands from "../pages/Brands";

export default function Routes() {
  return (
    <Router>
      <Route path="/" element={<Dashboard />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/brands" element={<Brands />} />

      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
    </Router>
  );
}
