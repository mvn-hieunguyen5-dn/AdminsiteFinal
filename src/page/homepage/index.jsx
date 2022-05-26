import React from "react";
import RightNavBar from "../../components/layout/RightNavBar/RightNavBar";
import { Routes, Route } from "react-router-dom";
import FaQ from "./FaQ";
import TripManagement from "./TripManagement";
import NotFound from "../404"

export default function index() {
  return (
    <div className="h-screen min-w-full flex items-center bg-gray-900">
      <RightNavBar />
      <div className="h-full p-10 flex-grow border-l-4 border-gray-900 bg-zinc-50 overflow-y-auto">
        <Routes>
          <Route path="/" element={<FaQ />} />
          <Route path="/trip/*" element={<TripManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
