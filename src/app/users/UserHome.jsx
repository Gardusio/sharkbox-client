import DayCarousel from "../common/buttons/DayCarousel.jsx";
import { useEffect, useState } from "react";
import { getAllByDate, removeLesson } from "../../api/lessons.api.js";
import LessonsList from "./lessons/components/LessonsList.jsx";
import dayjs from "dayjs";
import UsersLessonsList from "./UserLessonsList.jsx";

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

            <UsersLessonsList
                lessons={lessons}
                joinLesson={joinLesson}
            />
        </main>
    );

}

export default UserHome