import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/homepage";
import Auth from "./page/auth";
import useAuth from "./hooks/useAuth";
import NotFound from "./page/404";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const { isLogged } = useAuth();
  // alert(isLogged);
  return (
    <div className="App overflow-hidden h-screen ">
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}
