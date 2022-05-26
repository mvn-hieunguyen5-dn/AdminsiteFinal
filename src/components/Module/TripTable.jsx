import React from "react";
import { Table, Space } from "antd";
export default function TripTable({ data }) {
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
    },
    {
      title: "Create date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Destination",
      dataIndex: "end_location",
      key: "end_location",
    },
    {
      title: "Start date",
      key: "start_date",
      render: (_, record) => (
        <p> {new Date(record.start_date).toLocaleString()}</p>
      ),
    },
    {
      title: "Image",
      key: "image",
      render: (_, record) => (
        <div className="static  w-full h-full">
          <img
          src={record.image}
          className="table-picture hover:scale-300 hover:z-50"
          alt=""
          srcset=""
        />
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <p className="text-green-600 func_a">Detail</p>
          <p className="text-red-600 func_a">Delete</p>
        </Space>
      ),
    },
  ];
  return (
    <div className="mt-5 ">
      <Table dataSource={data} columns={columns} rowKey="id" />;
    </div>
  );
}
