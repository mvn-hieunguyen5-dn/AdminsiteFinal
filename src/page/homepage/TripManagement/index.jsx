import React from "react";
import { NavLink, Link } from "react-router-dom";
import TripTable from "../../../components/Module/TripTable";

import { Routes, Route } from "react-router-dom";
import AddTrip from "./AddTrip";

export default function Index() {
  return (
    <div className="text-left">
      <Link to="/trip">
        <h1>Trip management</h1>
      </Link>
      
      <nav>
        <NavLink
          to="/trip/addTrip"
          end
          className={({ isActive }) =>
            isActive ? " hidden " : " BlackButton "
          }
        >
          Add new Trip
        </NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<TripTable  />}
        />
        <Route path="/addTrip" element={<AddTrip />} />
        <Route path="/addTrip/:id" element={<AddTrip />} />
      </Routes>
    </div>
  );
}
