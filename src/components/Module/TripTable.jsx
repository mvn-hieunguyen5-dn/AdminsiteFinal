import React from "react";
import { Table, Space, message } from "antd";
import { Popconfirm } from "antd";

export default function TripTable({ data }) {
  const text = "Are you sure ?";
  const confirm = (id) => {
    message.info("Clicked on Yes." + id);
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
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <p className="text-green-600 func_a">Detail</p>
          <p className="text-yellow-600 func_a">Edit</p>
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
