import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import TripTable from "../../../components/Module/Table/TripTable";
import { Modal } from "antd";
import { Routes, Route } from "react-router-dom";
import AddTrip from "./AddTrip";
import { PlusSquareFilled } from "@ant-design/icons";
import DetailsTrip from "../../../components/Module/View/DetailsTrip";
export default function Index() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState(false);
  const openDetail = (data) => {
    setVisible(true);
    console.log(data);
    setData(data);
  };
  return (
    <div className="text-left">
      <Link to="/trip">
        <h1 >Trip management</h1>
      </Link>
      <nav>
        <NavLink
          to="/trip/addTrip"
          end
          className={({ isActive }) =>
            "center_a_div w-fit gap-2" +( isActive ? " hidden " : " BlackButton ")
          }
        >
          <PlusSquareFilled />
          Add new Trip
        </NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<TripTable openDetail={(id) => openDetail(id)} />}
        />
        <Route path="/addTrip" element={<AddTrip />} />
        <Route path="/addTrip/:id" element={<AddTrip />} />
      </Routes>
      <Modal
        title="Details"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <DetailsTrip data={data} />
      </Modal>
    </div>
  );
}
