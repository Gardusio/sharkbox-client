import { delet, get, orElseThrow, post, put } from "./api";
import dayjs from 'dayjs'

export const updateCourse = async (courseForm) => {
    const courseDTO = {
        ...courseForm,
        end_date: courseForm.end_date ? dayjs(courseForm.end_date) : "",
        anticipo_disdetta: parseInt(courseForm.anticipo_disdetta),
        anticipo_prenotazione: parseInt(courseForm.anticipo_prenotazione),
        max_partecipanti: parseInt(courseForm.max_partecipanti),
    }

    const doUpdate = async () => {
        return await put("/courses", courseDTO)
    };

    return await orElseThrow(doUpdate)
}

export const createCourse = async (courseForm) => {
    const courseDTO = {
        ...courseForm,
        anticipo_disdetta: parseInt(courseForm.anticipo_disdetta),
        anticipo_prenotazione: parseInt(courseForm.anticipo_prenotazione),
        max_partecipanti: parseInt(courseForm.max_partecipanti),
    }

    const doCreate = async () => {
        const id = await post("/courses", courseDTO)
        return id;
    };

    return await orElseThrow(doCreate)
}

export const getById = async (id) => {
    const doGet = async () => await get("/courses/" + id);

    return await orElseThrow(doGet)
}

export const getAll = async () => {
    const doGet = async () => await get("/courses/");

    return await orElseThrow(doGet)
}

export const removeCourse = async (id) => {
    const doDelete = async () => await delet("/courses/" + id);

    return await orElseThrow(doDelete)
}