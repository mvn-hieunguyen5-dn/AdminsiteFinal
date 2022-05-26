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
    <div className="h-full my-5 font-medium flex-shrink-0 transition-all duration-300 ease-linear w-fit  ">
      <div className=" h-full  flex flex-col  p-4">
        <button
          onClick={() => {
            setHide(!isHide);
          }}
          className={" center_a_div BlackButton p-0 "}
        >
          <div
            className={
              "center_a_div transition-all duration-300 ease-linear " +
              (isHide ? "rotate-180" : "")
            }
          >
            <DoubleLeftOutlined />
          </div>{" "}
          {isHide ? "Show" : "Hide"}
        </button>
        <div className="text-xl text-left mt-10">
          <ul className="flex flex-col divide-y-2 divide-gray-900">
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
                    <div className="p-4  rounded-xl group-hover:rounded-md bg-slate-600 transition-all duration-300 ease-linear center_a_div shadow-2xl  group-hover:shadow-sky-700">
                      {data.icon}
                    </div>
                    <p className={!isHide ? "font-bold " : "hidden"}>
                      {data.name}
                    </p>
                    <span
                      className={
                        "sidebar-tooltip group-hover:scale-100 " +
                        (!isHide ? "  hidden " : " sidebar-tooltip")
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
        <div className="flex items-center gap-3 flex-shrink-0 justify-center ">
          <img
            srcSet="https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png?w=681&h=383&crop=1"
            alt=""
            className={
              "object-cover transition-all duration-300 ease-linear shadow-2xl " +
              (isHide
                ? " h-16 w-16 mb-5 rounded-full "
                : " rounded-2xl  h-24 w-24 ")
            }
          />
          <div
            className={
              " " + (isHide ? "hidden  " : " flex flex-col text-left pr-10 ")
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
