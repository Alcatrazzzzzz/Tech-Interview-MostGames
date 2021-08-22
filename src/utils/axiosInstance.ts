import axios from "axios";
import { apiKey } from "../constants/apiConstants";

//making axios  instance form comfort usage
export const axiosInstance = axios.create({
  // baseURL: "http://tmgwebtest.azurewebsites.net/api/",
  headers: { "TMG-Api-Key": apiKey },
});
