import { request } from "./request";
export const getData = (data) => request.post("/oauth/token", data);
