import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { Modal } from "antd";
import TripTable from "../../../components/Module/TripTable";
import { apiGetTrip } from "../../../core/api/Trip/Trip.api";
// import UploadImgForm from "../../../components/Module/Form/UploadImgForm";
import { Routes, Route } from "react-router-dom";
import AddTrip from "./AddTrip";

export default function Index() {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const [TripData, setTripData] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await apiGetTrip();
      // response = await response.json();

      setTripData(response.data);
      console.table(response.data);
    }

    fetchMyAPI();
  }, []);
  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  return (
    <div className="text-left">
      <h1>Trip management</h1>
      <blockquote>Hello there, this is use for FAQ or maybe alert</blockquote>
      <nav>
        <NavLink
          to="/trip/addTrip"
          end
          className={({ isActive }) => (isActive ? " hidden " : " BlackButton ")}
        >
          Add new Trip
        </NavLink>
        <NavLink
          to="/trip"
          end
          className={({ isActive }) => (isActive ? " hidden " : " BlackButton ")}
        >
          Back to Table
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<TripTable data={TripData} />} />
        <Route path="/addTrip" element={<AddTrip />} />
      </Routes>

      {/* <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <UploadImgForm />
      </Modal> */}
    </div>
  );
}
