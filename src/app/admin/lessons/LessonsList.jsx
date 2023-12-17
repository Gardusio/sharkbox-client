import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, List, ListItem, Button, Card, CardContent, CardActions, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const LessonsList = ({ lessons, deleteLesson }) => {
    const navigate = useNavigate();

    return (
        <Container component="main" sx={{ p: 0, marginBottom: "100px" }}>
            {
                lessons.length > 0 ? (
                    <List sx={{
                        px: 2,
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
                    }}>
                        {lessons.map((lesson, idx) => (
                            <ListItem
                                key={lesson.id + lesson.slot_id}
                                disablePadding
                                sx={idx > 0 ? { borderTop: "1px solid #2F2F2F", } : null}>

                                <Card variant="outlined"
                                    sx={{
                                        width: "92%", mb: 4, margin: "auto", mt: 0,
                                        boxShadow: "rgba(0,0,0,0.1) 0px 2px 4px;",
                                        background: "#FCFAFA",
                                        border: "1px solid rgba(0,0,0,0.16)"
                                    }} >

                                    <CardContent
                                        onClick={() => navigate("/lezioni/" + lesson.id)}
                                        sx={{ p: 0 }}>
                                        <Box display={"flex"} alignItems={"center"} height={"42px"}
                                            color={"#fff"}
                                            bgcolor={"#6DA34D"}
                                        >
                                            <Typography variant="h6" component="div" width={"100%"} px={2}>
                                                {lesson.nome}
                                            </Typography>

                                            <Typography
                                                fontSize={"16px"}
                                                sx={{
                                                    width: "100%",
                                                    height: "100%",
                                                    textAlign: "center",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    border: "1px solid #fff",
                                                    color: "#fff",
                                                    bgcolor: "#edb230"
                                                }}
                                                component="div">
                                                <AccessTimeFilledIcon fontSize={"10px"} sx={{ marginRight: "4px" }} />
                                                <b>{lesson.start} - {lesson.end}</b>
                                            </Typography>

                                        </Box>
                                        <List variant="body2" color={"#2f2f2f"}>
                                            <ListItem divider > <Typography variant='subtitle1'><b>Partecipanti: </b>{lesson.partecipanti.length} / {lesson.max_partecipanti} persone </Typography></ListItem>
                                            <ListItem divider > <Typography variant='subtitle1' ><b>In coda: </b>{lesson.coda.length} persone</Typography></ListItem>
                                        </List>
                                    </CardContent>

                                    <CardActions sx={{ display: 'flex', alignItems: "center", justifyContent: "space-between", px: 2, pb: 1 }}>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                color: '#6DA34D',
                                                borderColor: '#6DA34D'
                                            }}
                                            onClick={() => navigate("/lezioni/" + lesson.id + "/partecipanti", { state: { lesson: lesson } })}>
                                            <b>Partecipanti</b>
                                        </Button>

                                        <Button size='small' variant="text" style={{ textDecoration: 'none', color: '#942911' }}
                                            onClick={async () => await deleteLesson(lesson.id)}
                                        >
                                            Elimina
                                        </Button>
                                    </CardActions>

                                </Card>

                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <Typography textAlign="center" variant="subtitle1" mt={2} sx={{ color: "rgba(0,0,0,0.4)" }}>Nessuna lezione </Typography>
                )
            }
        </Container >
    );
};

export default LessonsList;
