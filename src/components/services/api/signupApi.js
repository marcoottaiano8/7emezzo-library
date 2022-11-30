import { postApiNoAuth } from "../genericServices";

export async function postSignup(obj) {
    return await postApiNoAuth('/user/registration', obj);
}