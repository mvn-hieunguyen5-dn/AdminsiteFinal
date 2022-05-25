import React from "react";
import { NavLink } from "react-router-dom";
import { HomeFilled, CalendarFilled, SettingFilled } from "@ant-design/icons";
export default function RightNavBar() {
  const activeStyle = "text-amber-500 w-full font-bold p-2  flex items-center gap-1";
  const Style = "w-full p-2 flex items-center gap-1";
  return (
    <div className="h-full my-5 font-medium">
      <div className=" h-full w-80  flex flex-col  p-4">
        <div className="flex items-center gap-3">
          <img
            srcSet="https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png?w=681&h=383&crop=1"
            alt=""
            className="h-24 w-24 object-cover rounded-2xl"
          />
          <div className="text-left">
            <h2>Username</h2>
            <span>Admin</span>
          </div>
        </div>
        <div className="text-2xl text-left mt-10">
          <ul className="flex flex-col divide-y-2">
            <li className="flex-grow flex ">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeStyle : Style)}
              >
                 <HomeFilled></HomeFilled>Messages
              </NavLink>
            </li>
            <li className="flex-grow flex">
              <NavLink
                to="/trip"
                className={({ isActive }) => (isActive ? activeStyle : Style)}
              >
                <CalendarFilled />Trip management
              </NavLink>
            </li>
            <li className="flex-grow flex">
              <NavLink
                to="/setting"
                className={({ isActive }) => (isActive ? activeStyle : Style)}
              >
                <SettingFilled />Setting
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
