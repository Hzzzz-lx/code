import { request } from "./request";
export const getData = (data) => request.post("/oauth/token", data);
export const getToken = (data) => request.post("/api/v5/user/repos", data);
export const getKu = (params) =>request.get("/api/v5/user/repos", {params});
