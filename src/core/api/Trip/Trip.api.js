import { api } from "../api";

const apiGetTrip = () => {
  return api.get("/trip");
};
const apiGetTripById = (id) => {
  return api.get("/trip?id=" + id);
};
const apiEditTripById = (data, id) => {
  return api.put("/trip/" + id, data);
};
const apiPostTrip = (data) => {
  return api.post("/trip", data);
};
const apiDeleteTripById = (id) => {
  return api.delete("/trip/" + id);
};

export {
  apiGetTrip,
  apiPostTrip,
  apiGetTripById,
  apiDeleteTripById,
  apiEditTripById,
};
