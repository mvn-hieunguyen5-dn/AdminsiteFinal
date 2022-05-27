import React from "react";
import { Table, Space, message } from "antd";
import { Popconfirm } from "antd";
import { apiDeleteTripById } from "../../core/api/Trip/Trip.api";
import { Link } from "react-router-dom";
export default function TripTable({ data, deleteItem }) {
  const text = "Are you sure ?";
  const confirm = async (id) => {
    message.loading("Deleteing id:" + id);
    const res = await apiDeleteTripById(id).catch((msg) => {
      return msg;
    });
    console.log(res);
    if (res.request.status !== 200) {
      message.error(res.response.statusText);
    } else {
      message.success("Delete successfull");
      deleteItem(id);
    }
    console.log(res);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
    },
    {
      title: "Trip name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Customer name",
      dataIndex: "customer_name",
      key: "customer_name",
      responsive: ["sm"]
    },
    {
      title: "Create date",
      key: "createdAt",
      responsive: ["sm"],
      render: (_, record) => (
        <p> {new Date(record.createdAt).toLocaleDateString()}</p>
      ),
    },
    {
      title: "Destination",
      dataIndex: "end_location",
      key: "end_location",
      responsive: ["md"]
    },
    {
      title: "Start date",
      key: "start_date",
      render: (_, record) => (
        <p> {new Date(record.start_date).toLocaleString()}</p>
      ),
      responsive: ["md"]
    },
    {
      title: "Image",
      key: "image",
      render: (_, record) => (
        <div className="static  w-full h-full ">
          {record.image ? (
            <img
              src={record.image}
              className="table-picture hover:scale-300 z-40 hover:z-50"
              alt=""
              srcSet=""
            />
          ) : (
            ""
          )}
        </div>
      ),
      responsive: ["xl"]
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <p className="text-green-600 func_a">Detail</p>
          <Link
            to={"/trip/addTrip/" + record.id}
            className="text-yellow-600 func_a"
          >
            Edit
          </Link>
          <Popconfirm
            placement="topLeft"
            title={text}
            onConfirm={() => confirm(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <p className="text-red-600 func_a">Delete</p>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <div className="mt-5 z-20">
      <Table dataSource={data} columns={columns} rowKey="id" />;
    </div>
  );
}
