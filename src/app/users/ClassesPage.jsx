import { useContext, useEffect, useState } from "react"
import { UserContext } from '../context/UserProvider';
import { Box, Button, Container, List, ListItem, Typography, useTheme } from "@mui/material";
import { getAllByUser, removePartecipant } from "../../api/lessons.api";
import LoadingSpinner from "../common/layouts/LoadingSpinner";

const ClassesPage = () => {
    const theme = useTheme();
    const { user } = useContext(UserContext)

    const [lessons, setLessons] = useState([1]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchLessons = () => {
            getAllByUser(user.id)
                .then(lessons => setLessons(lessons))
                .finally(() => setIsLoading(false))
        }

        fetchLessons()
    }, [])

    const handleRemovePartecipant = async (lesson) => {
        const updatedLesson = await removePartecipant(lesson, user.id);
        setLessons(prev => prev.filter(l => l.id != updatedLesson.id))
    }

    if (isLoading) { return <LoadingSpinner /> }

    return (
        <Container sx={{ p: 2 }}>
            <List sx={{ mt: 2, p: 0 }}>

                {lessons.map(lesson =>
                    <ListItem key={lesson.id}
                        divider sx={{ ...theme.containers.row.centerbetween }}>

                        <Box sx={{ ...theme.containers.column.center }}>
                            <Typography variant="subtitle2">{lesson.date}</Typography>
                            <Typography variant="subtitle1">{lesson.nome}</Typography>
                        </Box>

                        <Button
                            onClick={() => handleRemovePartecipant(lesson)}
                            color="warning"
                        >Abbandona
                        </Button>
                    </ListItem>
                )}
            </List>
        </Container>
    )
}

export default ClassesPage