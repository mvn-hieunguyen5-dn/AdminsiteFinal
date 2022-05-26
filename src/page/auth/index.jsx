import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";

export default function Index() {
  return (
    <Routes>
      <Route path="/" element={<UserLogin />} />
      <Route path="/register" element={<UserRegister />} />
    </Routes>
  );
}
