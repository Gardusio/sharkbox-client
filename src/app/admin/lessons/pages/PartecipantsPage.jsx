import { Box, Button, Container, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AddPartecipantDialog from "../components/AddPartecipantDialog";
import { useLocation } from "react-router";
import { getAllUsers } from "../../../../api/users.api";
import { addPartecipant, removePartecipant } from "../../../../api/lessons.api";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircleOutlined';


const PartecipantsPage = () => {
    const { state } = useLocation();

    const [error, setError] = useState("");

    const [users, setUsers] = useState([]);
    const [lesson, setLesson] = useState({});
    const [partecipants, setPartecipants] = useState([]);
    const [inQueue, setInQueue] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const users = (await getAllUsers())
                .filter((user) => !state.lesson.partecipanti.some((p) => p.id === user.id))
                .filter((user) => !state.lesson.coda.some((c) => c.id === user.id));

            setUsers(users);
            setLesson(state.lesson)
            setPartecipants(state.lesson.partecipanti)
            setInQueue(state.lesson.coda)
        }

        fetchData();
    }, [])


    const handleAddPartecipant = async (user) => {
        try {
            if (user) {
                const updatedLesson = await addPartecipant(lesson, user)
                setPartecipants(updatedLesson.partecipanti);
                setInQueue(updatedLesson.coda);
                setUsers(prev => prev.filter((existing) => existing.id !== user.id))
            }
        }
        catch (err) {
            setError("Impossibile aggiungere partecipante")
        }
    };

    const handleRemovePartecipant = async (user) => {

        const updatedLesson = await removePartecipant(state.lesson, user.id);
        setPartecipants(updatedLesson.partecipanti);
        setInQueue(updatedLesson.coda);
        setUsers(prev => [...prev, user])
    }

    return (
        <Container sx={{ px: 2, pt: 1, marginBottom: "100px" }}>
            <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>{state.lesson.nome}</Typography>
            <Typography variant="subtitle1" fontWeight={"medium"} textAlign={"center"}>{state.lesson.date}</Typography>
            <Box sx={{
                width: "90%",
                margin: "auto",
                mt: 4, pt: 2, pb: 4, px: 2,
                boxShadow: "#6DA34D 0px 1px 4px;",
                border: "1px solid #52AA5E",
                borderRadius: "10px"
            }}>
                <Typography mb={2} fontWeight={"bold"} textAlign={"center"} color={"#6DA34D"}> Aggiungi partecipanti</Typography>
                <AddPartecipantDialog
                    users={users.map(u => ({ name: u.name, id: u.id }))}
                    addPartecipant={handleAddPartecipant} />
            </Box>
            <Box sx={{
                mt: 6,
            }}>
                <Box mt={2}>
                    <Typography fontWeight={"bold"} color={"#2f2f2f"} >Partecipanti</Typography>
                    <List>
                        {partecipants.length > 0 ? partecipants.map((user, index) => (
                            <ListItem
                                divider
                                sx={{ p: 1 }}
                                key={index}
                                disableGutters
                                secondaryAction={
                                    <IconButton
                                        sx={{ color: "#942911" }}
                                        variant="text"
                                        onClick={async () => await handleRemovePartecipant(user)}>
                                        <RemoveCircleIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemText primary={user.name} />
                            </ListItem>
                        )) : <Typography mt={2} fontSize={"16px"} textAlign={'center'} color={"#7a7a7a"}>Ancora nessun partecipante</Typography>}
                    </List>
                </Box>
                <Box mt={6}>
                    <Typography fontWeight={"bold"} color={"#2f2f2f"}  >In coda</Typography>
                    <List>
                        {inQueue.length > 0 ? inQueue.map((user, index) => (
                            <ListItem
                                divider
                                sx={{ p: 1 }}
                                key={index}
                                disableGutters
                                secondaryAction={
                                    <IconButton
                                        sx={{ color: "#942911" }}
                                        variant="text"
                                        onClick={async () => await handleRemovePartecipant(user)}>
                                        <RemoveCircleIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemText primary={user.name} />
                            </ListItem>
                        )) : <Typography mt={0} fontSize={"16px"} textAlign={'center'} color={"#7a7a7a"}>Nessuno in coda</Typography>}

                    </List>
                </Box>
            </Box>
        </Container >
    );
}

export default PartecipantsPage;