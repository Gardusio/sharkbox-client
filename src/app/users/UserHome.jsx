import DayCarousel from "../common/buttons/DayCarousel.jsx";
import { useEffect, useState } from "react";
import { getAllByDate } from "../../api/lessons.api.js";
import dayjs from "dayjs";
import UsersLessonsList from "./UserLessonsList.jsx";
import LessonsList from "../admin/lessons/components/LessonsList.jsx";

const joinLesson = () => { }

function UserHome() {

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

    return (
        <main style={{ width: "100%", margin: "auto" }}>

            <DayCarousel fetchLessons={fetchLessons} />

            <LessonsList
                lessons={lessons}
                joinLesson={joinLesson}
            />
        </main>
    );

}

export default UserHome