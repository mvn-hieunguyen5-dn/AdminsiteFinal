import React from "react";
import TripForm from "../../../components/Module/Form/TripForm";
import { useParams } from "react-router-dom";
export default function AddTrip() {
  const { id } = useParams();
  return (
    <>
      <TripForm id={id} />
    </>
  );
}
