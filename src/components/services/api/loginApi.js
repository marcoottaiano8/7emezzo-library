import { postApiNoAuth } from "../genericServices";

export async function signinApi(obj) {
  return await postApiNoAuth("signin", obj);
}
