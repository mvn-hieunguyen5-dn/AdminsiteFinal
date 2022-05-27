import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import TripTable from "../../../components/Module/TripTable";
import { apiGetTrip } from "../../../core/api/Trip/Trip.api";
import { Routes, Route } from "react-router-dom";
import AddTrip from "./AddTrip";

export default function Index() {
  const [TripData, setTripData] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await apiGetTrip();
      setTripData(response.data);
    }

    fetchMyAPI();
  }, []);
  const deleteItem = (id) => {
    setTripData(TripData.filter((item) => item.id !== id));
  };
  return (
    <div className="text-left">
      <Link to="/trip">
        <h1>Trip management</h1>
      </Link>
      <blockquote>Hello there, this is use for FAQ or maybe alert</blockquote>
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
          element={<TripTable data={TripData} deleteItem={deleteItem} />}
        />
        <Route path="/addTrip" element={<AddTrip />} />
        <Route path="/addTrip/:id" element={<AddTrip />} />
      </Routes>
    </div>
  );
}
