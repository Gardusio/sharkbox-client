import DayCarousel from "../common/buttons/DayCarousel.jsx";
import { useContext, useEffect, useState } from "react";
import { addPartecipant, getAllByDate, removePartecipant } from "../../api/lessons.api.js";
import dayjs from "dayjs";

import LessonsList from "../admin/lessons/components/LessonsList.jsx";
import { UserContext } from "../context/UserProvider.jsx";
import LoadingSpinner from "../common/layouts/LoadingSpinner.jsx";
import { useNavigate } from "react-router";
import { Box } from "@mui/material";


function UserHome() {
    const navigate = useNavigate()
    const { user } = useContext(UserContext)

    const [lessons, setLessons] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    const fetchLessons = (date) => {
        getAllByDate(date)
            .then(lessons =>
                setLessons(lessons)
            )
            .catch(err => setError("Qualcosa è andato storto, riprova più tardi"))
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        fetchLessons(dayjs());
    }, []);


    const joinLesson = (lesson) => {
        setIsLoading(true);
        addPartecipant(lesson, user)
            .then(response => navigate("/"))
            .catch(err => setError("Qualcosa è andato storto, riprova più tardi"))
            .finally(() => setIsLoading(false));
    }

    const leaveLesson = (lesson) => {
        setIsLoading(true);
        removePartecipant(lesson, user.id)
            .then(response => navigate("/"))
            .catch(err => setError("Qualcosa è andato storto, riprova più tardi"))
            .finally(() => setIsLoading(false));
    }

    if (isLoading) {
        return (
            <Box mt={50}>
                <LoadingSpinner />
            </Box>
        )
    }

    return (
        <main style={{ width: "100%", margin: "auto" }}>

            <DayCarousel fetchLessons={fetchLessons} />
            {error ? <Typography variant="body1" textAlign={"center"} color={"error"}>{error}</Typography>
                :
                <LessonsList
                    lessons={lessons}
                    joinLesson={joinLesson}
                    leaveLesson={leaveLesson}
                />
            }
        </main>
    );

}

export default UserHome