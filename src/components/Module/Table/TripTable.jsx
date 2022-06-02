import React, { useEffect, useState } from "react";
import { Table, Space, message } from "antd";
import { Popconfirm } from "antd";
import { apiDeleteTripById } from "../../../core/api/Trip/Trip.api";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { apiGetTrip } from "../../../core/api/Trip/Trip.api";
import { PlusOutlined } from "@ant-design/icons";
export default function TripTable({ openDetail }) {
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
      responsive: ["sm"],
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
      responsive: ["md"],
    },
    {
      title: "Start date",
      key: "start_date",
      render: (_, record) => (
        <p> {new Date(record.start_date).toLocaleString()}</p>
      ),
      responsive: ["md"],
    },
    {
      title: "Image",
      key: "image",
      render: (_, record) => (
        <>
          {record.image ? (
            <img
              src={record.image}
              className="w-20 h-10 object-cover"
              alt=""
              srcSet=""
            />
          ) : (
            ""
          )}
        </>
      ),
      responsive: ["xl"],
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <p
            className="text-green-600 func_a"
            onClick={() => openDetail(record)}
          >
            Detail
          </p>
          <Link
            to={`/trip-management/${record.id}/update`}
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
      <h1>Trip management</h1>
      <nav className="w-full flex justify-end">
        <NavLink
          to="/trip-management/create-new"
          end
          className={({ isActive }) =>
            "center_a_div w-fit gap-2 " +
            (isActive
              ? " hidden "
              : " OutLineButton py-3 font-semibold hover:BlackButton active:text-amber-400  ")
          }
        >
          <PlusOutlined />
          Add new Trip
        </NavLink>
      </nav>
      <Table dataSource={TripData} columns={columns} rowKey="id" />;
      <blockquote className="text-xl">
        Quản lý của một công ty tổ chức lữ hành,{" "}
        <span className="underline decoration-green-600 underline-offset-2">
          xác định phòng ban
        </span>{" "}
        và người{" "}
        <span className="underline decoration-gray-600 underline-offset-2">
          chịu trách nghiệm tổ chức
        </span>{" "}
        kiêm luôn phân chia{" "}
        <span className="underline decoration-cyan-700 underline-offset-2">
          loại dịch vụ
        </span>{" "}
        cung cấp
      </blockquote>
    </div>
  );
}
