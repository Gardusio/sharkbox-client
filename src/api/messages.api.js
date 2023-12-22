import { delet, get, orElseThrow, post } from "./api";

export const createMessage = async (message) => {

    const doCreate = async () => await post("/messages/", { text: message });

    return await orElseThrow(doCreate)
}

export const getAllMessages = async () => {

    const doGet = async () => await get("/messages/");

    return await orElseThrow(doGet)
}

export const deleteMessage = async (id) => {

    const doDelete = async () => await delet("/messages/" + id);

    return await orElseThrow(doDelete)
}