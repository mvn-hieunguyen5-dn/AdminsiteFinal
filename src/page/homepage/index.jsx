import React from "react";
import RightNavBar from "../../components/layout/RightNavBar/RightNavBar";
import { Routes, Route } from "react-router-dom";
import FaQ from "./FaQ";
import TestEditor from "./TestEditor";
import TripManagement from "./TripManagement";
import NotFound from "../404";
import { useSelector } from "react-redux";

export default function Index() {
  const isDark = useSelector((state) => state.setDark.isDark);
  return (
    <div
      className={
        "h-screen min-w-full flex items-center  flex-col-reverse  xl:flex-row" +
        (isDark ? " dark" : "")
      }
    >
      <RightNavBar />
      <div className="h-full p-10 flex-grow  bg-zinc-50 dark:bg-gray-800  overflow-y-auto w-full x scroll-smooth">
        <Routes>
          <Route path="/trip-management/*" element={<TripManagement />} />
          <Route path="/testEditor" element={<TestEditor />} />
          <Route path="/" element={<FaQ />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
        <div className="xl:hidden h-10">

        </div>
      </div>
    </div>
  );
}
