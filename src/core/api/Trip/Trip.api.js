import { api } from "../api";

export const apiGetTrip = () => {
  return api.get("/trip");
};
