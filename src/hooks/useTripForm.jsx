import { useState } from "react";
export default function useTripForm() {
  const [image, setImg] = useState("");
  const [isLoad, setLoad] = useState(false);
  const [formData, setFormData] = useState({
    createdAt: "",
    name: "",
    start_location: "",
    end_location: "",
    range_time: null,
    EM_name: null,
    customer_name: "",
    customer_social_id: "",
  });

  const setDafault = () => {
    setFormData({
      createdAt: "",
      name: "",
      start_location: "",
      end_location: "",
      range_time: null,
      EM_name: null,
      customer_name: "",
      customer_social_id: "",
    });
  };
  const rangeConfig = {
    rules: [{ type: "array", required: true, message: "Requied value!!" }],
  };
  const requiedConfig = {
    rules: [{ required: true, message: "Requied value!!" }],
  };
  const resetFormData = () => {
    setFormData({
      createdAt: "",
      name: "",
      start_location: "",
      end_location: "",
      range_time: null,
      EM_name: null,
      customer_name: "",
      customer_social_id: "",
    });
  };

  return {
    image,
    isLoad,
    setImg,
    setLoad,
    setDafault,
    formData,
    rangeConfig,
    requiedConfig,
    setFormData,
    resetFormData,
  };
}
