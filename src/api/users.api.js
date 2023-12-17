import { get, orElseThrow } from "./api";

export const getAllUsers = async () => {
    const doGet = async () => await get("/users/");

    return await orElseThrow(doGet)
}