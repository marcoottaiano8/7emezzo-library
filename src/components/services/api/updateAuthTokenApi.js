import React from "react";
import { getDataFromStorage } from "../../utils/utils";
import { postApiNoAuth } from "../genericServices";

export async function updateAuthTokenApi() {
  return await postApiNoAuth("updateAuthToken", {
    refreshToken: getDataFromStorage("refreshToken"),
  });
}
