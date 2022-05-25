import React from "react";
import RightNavBar from "../../components/layout/RightNavBar/RightNavBar";
import { Routes, Route } from "react-router-dom";
import FaQ from "./FaQ";
import TripManagement from "./TripManagement";
import NotFound from "../404"

export default function index() {
  return (
    <div className="h-screen min-w-full flex items-center bg-slate-200">
      <RightNavBar />
      <div className="h-full p-2 bg-slate-50 rounded-l-md flex-grow">
        <Routes>
          <Route path="/" element={<FaQ />} />
          <Route path="/register" element={<TripManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
