import dayjs from "dayjs";
import { delet, get, orElseThrow, post, put } from "./api";

export const removePartecipant = async (lesson, userId) => {
    console.log(lesson, userId)
    const doRemove = async () => await put("/lessons/" + lesson.id + "/partecipants/" + userId);

    return await orElseThrow(doRemove)
}

export const addPartecipant = async (lesson, user) => {
    const doAdd = async () => await post("/lessons/" + lesson.id + "/partecipants", user);

    return await orElseThrow(doAdd)
}

export const getAll = async () => {
    const doGet = async () => await get("/lessons/");

    return await orElseThrow(doGet)
}

export const getAllByDate = async (date) => {
    const formattedDate = dayjs(date).format("DD-MM-YYYY");

    const doSortedGet = async () => {
        const lessons = await get("/lessons/" + formattedDate)

        lessons.sort((a, b) => {
            const timeA = a.start.split(":").map(Number);
            const timeB = b.start.split(":").map(Number);


            if (timeA[0] !== timeB[0]) {
                return timeA[0] - timeB[0];
            }

            return timeA[1] - timeB[1];
        });

        return lessons;
    };

    return await orElseThrow(doSortedGet);
};

export const getById = async (id) => {
    const doGet = async () => await get("/lessons/lesson/" + id);

    return await orElseThrow(doGet)
}

export const updateLesson = async (lesson) => {
    const doPut = async () => await put("/lessons/", lesson);

    return await orElseThrow(doPut)
}



export const createLesson = async (lessonDTO) => {
    const doCreate = async () => {
        const id = await post("/lessons", lessonDTO)
        return id;
    };

    return await orElseThrow(doCreate)
}

export const removeLesson = async (id) => {
    const doRemove = async () => await delet("/lessons/" + id);

    return await orElseThrow(doRemove);
}