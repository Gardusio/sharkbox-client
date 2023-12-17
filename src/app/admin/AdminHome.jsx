import DayCarousel from "../common/buttons/DayCarousel.jsx";
import { useEffect, useState } from "react";
import { getAllByDate, removeLesson } from "../../api/lessons.api.js";
import LessonsList from "./lessons/components/LessonsList.jsx";
import dayjs from "dayjs";

function AdminHome() {

    const [lessons, setLessons] = useState([])
    const [error, setError] = useState(null)

    const fetchLessons = (date) => {
        getAllByDate(date)
            .then(lessons =>
                setLessons(lessons)
            )
            .catch(err => setError("Qualcosa è andato storto, riprova più tardi"));
    };

    useEffect(() => {
        fetchLessons(dayjs());
    }, []);

    const deleteLesson = (id) => {
        removeLesson(id)
            .then(_ => setLessons(prev => prev.filter(l => l.id !== id)))
            .catch(err => setError("Impossibile cancellare la lezione"));
    }

    return (
        <main style={{ width: "100%", margin: "auto" }}>

            <DayCarousel fetchLessons={fetchLessons} />

            <LessonsList
                lessons={lessons}
                deleteLesson={deleteLesson}
            />
        </main>
    );

}

export default AdminHome