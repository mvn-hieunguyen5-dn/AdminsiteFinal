import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeFilled,
  CalendarFilled,
  SettingFilled,
  DoubleLeftOutlined,
  PlusSquareFilled,
} from "@ant-design/icons";
export default function RightNavBar() {
  const [isHide, setHide] = useState(false);
  const activeStyle =
    "text-amber-500 font-bold p-2  flex items-center gap-2 group ";
  const Style = "p-2 flex items-center gap-2 group text-white";
  const Route = [
    {
      id: 0,
      name: "Home page",
      route: "/",
      icon: <HomeFilled></HomeFilled>,
    },
    {
      id: 1,
      name: "Trip management",
      route: "/trip",
      icon: <CalendarFilled />,
    },
    {
      id: 3,
      name: "Add Trip",
      route: "/trip/addTrip",
      icon: <PlusSquareFilled />,
    },
    {
      id: 4,
      name: "Setting",
      route: "/setting",
      icon: <SettingFilled />,
    },
  ];
  return (
    <div className="h-fit lg:h-full lg:my-5  font-medium flex-shrink-0 transition-all duration-300 ease-linear w-fit  ">
      <div className=" h-full  flex lg:flex-col flex-row p-1 lg:p-4">
        <button
          onClick={() => {
            setHide(!isHide);
          }}
          className={" hidden lg:center_a_div BlackButton p-0 "}
        >
          <div
            className={
              "center_a_div transition-all duration-300 ease-linear " +
              (isHide ? "rotate-180" : "")
            }
          >
            <DoubleLeftOutlined />
          </div>{" "}
          {isHide ? "Extend" : "Hide"}
        </button>
        <div className="text-base text-left lg:mt-10 flex lg:flex-row ">
          <ul className="flex lg:flex-col flex-row divide-y-2 divide-gray-900">
            {Route.map((data) => {
              return (
                <li className="flex-grow flex " key={data.id}>
                  <NavLink
                    to={data.route}
                    end
                    className={({ isActive }) =>
                      isActive ? activeStyle : Style
                    }
                  >
                    <div className=" p-3  rounded-xl group-hover:rounded-md bg-slate-600 transition-all duration-300 ease-linear center_a_div shadow-2xl  group-hover:shadow-sky-200">
                      {data.icon}
                    </div>

                    {!isHide ? (
                      <p className="lg:block hidden  font-bold ">{data.name}</p>
                    ) : (
                      ""
                    )}

                    <span
                      className={
                        "sidebar-tooltip group-hover:scale-100 " +
                        (!isHide ? "  lg:hidden  " : "")
                      }
                    >
                      {data.name}
                    </span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex-grow"></div>
        <div className="flex items-center gap-3 justify-center ">
          <div className="relative group z-50 lg:mt-0 -mt-10">
            <img
              srcSet="https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png?w=681&h=383&crop=1"
              alt=""
              className={
                "object-cover transition-all duration-300 ease-linear lg:shadow-none shadow-lg shadow-slate-500 z-auto " +
                (isHide
                  ? " lg:h-16 lg:w-16 mb-5 rounded-full lg:relative h-24 w-24   "
                  : "  rounded-full lg:relative lg:rounded-2xl h-24 w-24 ")
              }
            />
            <span
              className={
                "sidebar-tooltip group-hover:scale-100 bg-red-500 top-1  scale-100 lg:scale-0 " 
              }
            >
              You have unsave progress
            </span>
            <div className="h-5 w-5 bg-red-600 rounded-full absolute top-0 right-0 z-50 animate-pulse"></div>
          </div>

          <div
            className={
              " " +
              (isHide
                ? "hidden  "
                : " hidden lg:flex flex-col text-left pr-10 ")
            }
          >
            <h2 className="text-white">Username</h2>
            <span className="text-white">Admin</span>
            <button className="w-fit  py-0.5 shadow-2xl shadow-black ">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
