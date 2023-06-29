import { axios } from "../rest/axios";
import {
  AirportDto,
  AirportListItemDto,
  AirportModel,
} from "./airportsApi.types";

export const getAirports = async () => {
  const { data } = await axios.get<AirportListItemDto[]>("/airports");
  return data;
};

export const getAirport = async (id: number) => {
  const { data } = await axios.get<AirportDto>(`/airport/${id}`);
  return data;
};

export const postAirport = async (values: AirportModel) => {
  const { data } = await axios.post<AirportDto>("/airport/add", values);
  return data;
};
