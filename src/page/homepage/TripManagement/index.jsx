import React, { useState } from "react";

import TripTable from "../../../components/Module/Table/TripTable";
import { Modal, Button } from "antd";
import { Routes, Route } from "react-router-dom";
import AddTrip from "./AddTrip";
import NotFound from "../../404";
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
      <Routes>
        <Route
          path="/"
          element={<TripTable openDetail={(id) => openDetail(id)} />}
        />
        <Route path="/create-new" element={<AddTrip />} />
        <Route path="/:id/update" element={<AddTrip />} />
        <Route path="/:id" element={<NotFound />} />
      </Routes>
      <Modal
        title="Details"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
        footer={
          <Button
            type="primary"
            onClick={()=>setVisible(false)}
          >
            Close
          </Button>
        }
      >
        <DetailsTrip data={data} />
      </Modal>
    </div>
  );
}
