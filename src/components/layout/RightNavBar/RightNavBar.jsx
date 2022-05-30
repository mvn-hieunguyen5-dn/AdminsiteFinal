import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { turnOffWarn } from "../../../store/unSaveClice";
import useAuth from "../../../hooks/useAuth";
import { Switch } from "antd";
import {
  HomeFilled,
  CalendarFilled,
  SettingFilled,
  DoubleLeftOutlined,
  PlusSquareFilled,
  CloseCircleOutlined,
  ImportOutlined,
} from "@ant-design/icons";
import { changeMode } from "../../../store/themeModeSlice";
export default function RightNavBar(props) {
  const { logout, user } = useAuth();
  const isAlert = useSelector((state) => state.unSave.isWarn);
  const isDark = useSelector((state) => state.setDark.isDark);
  const dispatch = useDispatch();
  const [isHide, setHide] = useState(false);
  const activeStyle =
    "text-amber-500 font-bold p-2  flex items-center gap-2 group xl:w-full selected";
  const Style = "p-2 flex items-center gap-2 group text-white xl:w-full";
  const switchMode = (checked) => {
    dispatch(changeMode());
  };
  const Route = [
    {
      id: 0,
      name: "Home page",
      route: "/",
      icon: <HomeFilled></HomeFilled>,
      end: true,
    },
    {
      id: 1,
      name: "Trip management",
      route: "/trip",
      icon: <CalendarFilled />,
      end: true,
    },
    {
      id: 3,
      name: "Add Trip",
      route: "/trip/addTrip",
      icon: <PlusSquareFilled />,
      end: false,
    },
    {
      id: 4,
      name: "Setting",
      route: "/setting",
      icon: <SettingFilled />,
      end: true,
    },
  ];
  return (
    <div className="h-fit xl:h-full xl:my-5  font-medium flex-shrink-0 animation fixed xl:relative xl:w-fit w-full bottom-0 shadow-lg bg-gray-900 dark:bg-slate-900 border-t-2 xl:border-none z-50">
      <div className=" h-full  flex xl:flex-col flex-row p-1 xl:p-4 justify-center xl:justify-start ">
        <div className="center_a_div">
          <button
            onClick={() => {
              setHide(!isHide);
            }}
            className={" group text-xl hidden xl:center_a_div BlackButton"}
          >
            <div
              className={
                "center_a_div animation " + (isHide ? "rotate-180" : "")
              }
            >
              <DoubleLeftOutlined />
            </div>{" "}
            <span
              className={
                isHide ? "sidebar-tooltip group-hover:scale-100 " : " hidden"
              }
            >
              {isHide ? "Extend" : "Hide"}
            </span>
          </button>
        </div>
        <div className="text-base text-left xl:mt-10 flex xl:flex-row ">
          <ul className=" flex xl:flex-col flex-row xl:divide-y-2 divide-gray-800  divide-solid  xl:w-full">
            {Route.map((data) => {
              return (
                <li className="flex-grow flex relative" key={data.id}>
                  <NavLink
                    to={data.route}
                    end={data.end}
                    className={({ isActive }) =>
                      isActive ? activeStyle : Style
                    }
                  >
                    <div className=" p-4 m-1  rounded-3xl group-hover:rounded-md group-hover:bg-amber-500 bg-gray-700  animation center_a_div shadow-2xl group-hover:shadow-sky-200 ">
                      {data.icon}
                    </div>

                    {!isHide ? (
                      <p className="xl:block hidden text-white group-hover:text-amber-400 font-bold group-hover:underline underline-offset-1 ">
                        {data.name}
                      </p>
                    ) : (
                      ""
                    )}

                    <span
                      className={
                        "sidebar-tooltip group-hover:scale-100 " +
                        (!isHide ? "  xl:hidden  " : "")
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
        <div className="center_a_div text-2xl">
          <Switch
            onChange={switchMode}
            defaultChecked={isDark}
            id="darkmode"
            checkedChildren={<p>Dark</p>}
            unCheckedChildren={<p className="text-slate-700">Light</p>}
          />
        </div>
        <div className="xl:flex-grow"></div>
        <div className="flex items-center gap-3 justify-center xl:mb-5 ">
          <div className="relative group z-50 xl:mt-0">
            <img
              srcSet="https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png?w=681&h=383&crop=1"
              alt=""
              className={
                "object-cover animation  rounded-2xl xl:shadow-none shadow-xl shadow-slate-500 z-auto h-12 w-12  " +
                (isHide
                  ? " xl:rounded-full xl:relative "
                  : "  rounded-full xl:relative  xl:h-24 xl:w-24 ")
              }
            />

            <div
              className={
                "h-5 w-5 absolute  -top-1 -right-1 z-50 group " +
                (isAlert ? "" : "hidden")
              }
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <button
                className="relative inline-flex rounded-full h-5 w-5 bg-red-500 center_a_div text-red-400 group-hover:text-white group hover:line-through"
                onClick={() => dispatch(turnOffWarn())}
              >
                <CloseCircleOutlined />
                <span
                  className={
                    isAlert
                      ? "sidebar-tooltip group-hover:scale-100 bg-red-500 center_a_div group-active:line-through decoration-2 decoration-red-500 underline-offset-1 text-lg "
                      : " hidden "
                  }
                >
                  You have unsave progress
                </span>
              </button>
            </div>
          </div>

          <div
            className={
              " " +
              (isHide
                ? " hidden "
                : " scale-100 hidden  xl:flex flex-col text-left pr-10 ")
            }
          >
            <h2 className="text-white">Hello there</h2>
            <span className="text-white">{user.email}</span>
            <button
              className="outLineButton center_a_div gap-1 group"
              onClick={logout}
            >
              <div className="center_a_div hidden group-hover:flex">
                <ImportOutlined />
              </div>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
