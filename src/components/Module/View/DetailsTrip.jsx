import React from "react";

export default function DetailsTrip({ data }) {
  console.log(data);
  return (
    <div>
      <img
        src={data.image}
        alt=""
        srcSet=""
        className="w-full object-cover object-center h-72"
      />
      <h2 className="underline">{data.name}</h2>

      <table className="w-full text-base xl:text-xl">
        <thead>
          <tr>
            <td colSpan={2}>
              {" "}
              <span>{new Date(data.createdAt).toDateString()} </span>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-slate-600 text-white">
            <td className="px-4 py-0.5">Customer name</td>
            <td className="px-4 py-0.5">Customer id</td>
          </tr>

          <tr>
            <td className="px-4 py-0.5">{data.customer_name}</td>
            <td className="px-4 py-0.5">{data.customer_social_id}</td>
          </tr>

          <tr className="bg-slate-600  text-white">
            <td className="px-4 py-0.5">Start date</td>
            <td className="px-4 py-0.5">End date</td>
          </tr>

          <tr>
            <td className="px-4 py-0.5">
              {new Date(data.start_date).toDateString()}
            </td>
            <td className="px-4 py-0.5">
              {new Date(data.end_date).toDateString()}
            </td>
          </tr>
          <tr className="bg-slate-600  text-white">
            <td className="px-4 py-0.5">Start location</td>
            <td className="px-4 py-0.5">Destination</td>
          </tr>

          <tr>
            <td className="px-4 py-0.5">{data.start_location}</td>
            <td className="px-4 py-0.5">{data.end_location}</td>
          </tr>

          <tr className="bg-slate-600  text-white">
            <td className="px-4 py-0.5">Department</td>
            <td className="px-4 py-0.5">Responesible</td>
          </tr>

          <tr>
            <td className="px-4 py-0.5">{data.Department}</td>
            <td className="px-4 py-0.5">{data.EM_name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
