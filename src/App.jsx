import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/homepage";
import Auth from "./page/auth";
import useAuth from "./hooks/useAuth";
import NotFound from "./page/404";
export default function App() {
  const { isLogged } = useAuth();
  // alert(isLogged);
  return (
    <div className="App overflow-hidden ">
      <Routes>
        {isLogged ? (
          <Route path="*" element={<Home />} />
        ) : (
          <>
            <Route path="/" element={<Auth />} />
            <Route path="*" element={<NotFound />} />
          </>
        )}
      </Routes>
    </div>
  );
}
