import React from 'react';

import { Container, Typography, List, ListItem } from '@mui/material';
import LessonCard from './LessonCard';

const UsersLessonsList = ({ lessons, joinLesson }) => {

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
                            "TODO"
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

export default UsersLessonsList;
