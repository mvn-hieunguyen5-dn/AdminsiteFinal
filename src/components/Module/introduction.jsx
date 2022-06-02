import React from "react";

export default function introduction() {
  return (
    <div className="text-black text-left">
      {" "}
      <h1>This is h1</h1>
      <h2 className=" underline-offset-1 underline decoration-stone-600">This is h2</h2>
      <h3>This is h3</h3>
      <h4>This is h4</h4>
      <table className="text-left border-2 border-gray-600 ">
        <thead>
          <tr className="bg-gray-800">
            <td colSpan={2}>
              <h3 className="text-white px-5">Libary used</h3>
            </td>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-slate-700">
          <tr>
            <td>React</td>
            <td>v18</td>
          </tr>
          <tr>
            <td>Router</td>
            <td>v6</td>
          </tr>
          <tr>
            <td>Redux</td>
            <td>Toolkit</td>
          </tr>
          <tr>
            <td>Material</td>
            <td>Antd</td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>Tailwind CSS</td>
          </tr>
         <tr>
           <td>API</td>
           <td>Axios</td>
         </tr>
          <tr>
            <td>Storge</td>
            <td>FireStorge</td>
          </tr>
        </tbody>
      </table>
      <h2>Color board</h2>
      <div className="flex items-center text-center font-semibold text-white flex-wrap -space-x-10 ">
        <div className=" center_a_div h-48 w-48 bg-amber-500 rounded-full shadow-xl hover:scale-110 animation hover:shadow-slate-h-480 z-10">
          Hight light <br></br>
          #bg-amber-500
        </div>
        <div className=" center_a_div h-48 w-48  rounded-full shadow-xl bg-slate-100 text-black hover:scale-110 animation z-20">
          Background 1 <br />
          #bg-slate-900 <br />
          Font white <br></br>
          #text-slate-900
        </div>
        <div className=" center_a_div h-48 w-48  rounded-full shadow-xl bg-slate-200 text-black hover:scale-110 animation z-30">
          Background 2 <br />
          #bg-slate-100 <br />
          Font black <br></br>
          #text-black"
        </div>
        <div className=" center_a_div h-48 w-48 bg-slate-800 rounded-full text-white shadow-xl hover:shadow-gray-400  hover:scale-110 animation z-40">
          Background strong <br></br>
          #bg-slate-500
        </div>
      </div>
      <blockquote>Username and password: admin</blockquote>
    </div>
  );
}
