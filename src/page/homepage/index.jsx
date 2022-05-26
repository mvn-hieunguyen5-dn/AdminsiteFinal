import React from "react";
import RightNavBar from "../../components/layout/RightNavBar/RightNavBar";
import { Routes, Route } from "react-router-dom";
import FaQ from "./FaQ";
import TripManagement from "./TripManagement";
import NotFound from "../404"

export default function index() {
  return (
    <div className="h-screen min-w-full flex items-center bg-gray-900 flex-col-reverse lg:flex-row">
      <RightNavBar />
      <div className="h-full p-10 flex-grow  bg-zinc-50 overflow-y-auto w-full">
        <Routes>
          <Route path="/" element={<FaQ />} />
          <Route path="/trip/*" element={<TripManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
