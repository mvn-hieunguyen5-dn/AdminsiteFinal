import React from "react";
import { Link } from "react-router-dom";
export default function P404() {
  return (
    <div className="h-screen min-w-full bg-slate-100 center_a_div  ">
      <div className="flex items-center">
        <p className="text-9xl font-bold text-red-700 animate-pulse">404</p>
        <div className="text-left text-2xl" >
          <h2 className="">Page not found</h2>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
