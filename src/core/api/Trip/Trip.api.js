import { api } from "../api";

const apiGetTrip = () => {
  return api.get("/trip");
};
const apiPostTrip = (data) => {
  return api.post("/trip", data);
};

export { apiGetTrip, apiPostTrip };
