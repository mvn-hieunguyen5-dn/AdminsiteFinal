import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeFilled,
  CalendarFilled,
  SettingFilled,
  DoubleLeftOutlined,
} from "@ant-design/icons";
export default function RightNavBar() {
  const [isHide, setHide] = useState(false);
  const activeStyle =
    "text-amber-500 w-full font-bold p-2  flex items-center gap-1 group";
  const Style = "w-full p-2 flex items-center gap-1 group text-white";
  return (
    <div className="h-full my-5 font-medium flex-shrink-0 transition-all duration-300 ease-linear w-fit">
      <div className=" h-full  flex flex-col  p-4">
        <button
          onClick={() => {
            setHide(!isHide);
          }}
          className={" center_a_div  gap-3 "}
        >
          <div
            className={
              "center_a_div transition-all duration-300 ease-linear " +
              (isHide ? "rotate-180" : "")
            }
          >
            <DoubleLeftOutlined />
          </div>{" "}
          {isHide ? 'Show' : 'Hide'}
        </button>
        <div className="text-2xl text-left mt-10">
          <ul className="flex flex-col divide-y-2">
            <li className="flex-grow flex ">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeStyle : Style)}
              >
                <div className="p-4  rounded-xl group-hover:rounded-md bg-slate-600 transition-all duration-300 ease-linear center_a_div shadow-2xl">
                  <HomeFilled></HomeFilled>
                </div>
                <p className={!isHide ? "font-bold text-slate-700" : "hidden"}>
                  Messages
                </p>
              </NavLink>
            </li>
            <li className="flex-grow flex">
              <NavLink
                to="/trip"
                className={({ isActive }) => (isActive ? activeStyle : Style)}
              >
                <div className="p-4  rounded-xl group-hover:rounded-md bg-slate-600 transition-all duration-300 ease-linear center_a_div shadow-2xl">
                  <CalendarFilled />
                </div>
                <p className={!isHide ? "font-bold text-slate-700" : "hidden"}>
                  Trip management
                </p>
              </NavLink>
            </li>
            <li className="flex-grow flex">
              <NavLink
                to="/setting"
                className={({ isActive }) => (isActive ? activeStyle : Style)}
              >
                <div className="p-4  rounded-xl group-hover:rounded-md bg-slate-600 transition-all duration-300 ease-linear center_a_div shadow-2xl">
                  <SettingFilled />
                </div>
                <p className={!isHide ? "font-bold text-slate-700" : "hidden"}>
                  {" "}
                  Setting
                </p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-grow"></div>
        <div className="flex items-center gap-3 flex-shrink-0 justify-center">
          <img
            srcSet="https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png?w=681&h=383&crop=1"
            alt=""
            className={
              "object-cover rounded-2xl transition-all duration-300 ease-linear shadow-2xl " +
              (isHide ? " h-14 w-14 mb-5 " : " h-24 w-24 ")
            }
          />
          <div className={" " + (isHide ? "hidden" : " text-left")}>
            <h2>Username</h2>
            <span>Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
}
