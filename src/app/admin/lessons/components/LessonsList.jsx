import React from 'react';

import { Container, Typography, List, ListItem } from '@mui/material';
import LessonCard from './LessonCard';

const LessonsList = ({ lessons, deleteLesson }) => {

    return (
        <Container component="main" sx={{ p: 0, marginBottom: "100px" }}>
            {
                lessons.length > 0 ? (

                    <List
                        sx={{
                            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                            px: 2,
                            mt: 0,
                        }}>

                        {lessons.map((lesson, idx) => (
                            <ListItem
                                key={lesson.id + lesson.slot_id}
                                disablePadding
                                sx={idx > 0 ? { mt: 6 } : { mt: 0 }}>

                                <LessonCard lesson={lesson} deleteLesson={deleteLesson} />
                            </ListItem>
                        ))}
                    </List>

                ) : (
                    <Typography
                        variant="subtitle1"
                        textAlign="center"
                        mt={2}
                        sx={{ color: "rgba(0,0,0,0.4)" }}>
                        Nessuna lezione
                    </Typography>
                )
            }
        </Container >
    );
};

export default LessonsList;
