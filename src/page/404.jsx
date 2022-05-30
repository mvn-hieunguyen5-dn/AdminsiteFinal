import React from "react";
import { Link } from "react-router-dom";
export default function P404() {
  return (
    <div className="h-full min-w-full bg-slate-100 dark:bg-gray-900 center_a_div   ">
      <div className="flex items-center">
        <p className="text-9xl font-bold text-red-700 dark:text-white animate-pulse">404</p>
        <div className="text-left text-2xl dark:text-white" >
          <h2 className="dark:text-white">Page not found</h2>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
