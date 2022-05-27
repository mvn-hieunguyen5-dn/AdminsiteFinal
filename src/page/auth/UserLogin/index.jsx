import React from "react";
import Introduction from "../../../components/Module/introduction";
import LogInForm from "../../../components/auth/loginForm";
export default function index() {
  return (
    <section className="sectionLogin w-screen">
      <div className="container flex  h-screen min-w-full  m-0 ">
        <div className="  hidden md:flex md:w-2/5 xl:w-3/5 h-screen bg-slate-100  flex-col items-start p-5 gap-2">
          <Introduction></Introduction>
        </div>
        <div className="bg-slate-800 h-screen flex flex-grow items-center justify-center">
          <div className="p-10 bg-slate-100 shadow-xl w-4/5 min-h-fit font-mono">
            <LogInForm />
          </div>
        </div>
      </div>
    </section>
  );
}
