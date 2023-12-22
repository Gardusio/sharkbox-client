import { Box, Button, Container, List, ListItem, Typography, useTheme } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { deleteMessage, getAllMessages } from "../../../api/messages.api"
import dayjs from "dayjs";
import { UserContext } from "../../context/UserProvider";

const ComunicazioniPage = () => {
    const theme = useTheme();
    const { user } = useContext(UserContext);
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const fetchMessages = () => {
            getAllMessages()
                .then(messages => setMessages(messages))
        }

        fetchMessages()
    }, [])

    const handleDelete = (id) => {
        deleteMessage(id)
            .then(resp =>
                setMessages(prev => prev.filter(m => m._id != id))
            )
    }

    return (
        <Container sx={{ px: 4 }}>
            {user && user.role === "USER" ?
                <Box sx={{ mb: 4 }}>
                    <Typography variant="subtitle1" fontWeight={"bold"}>Contatti</Typography>
                    <Typography variant="body2"><b>Tel :</b> 3894831579</Typography>
                    <Typography variant="body2"><b>Email :</b> danila@gmail.com</Typography>
                </Box>
                :
                null
            }


            <Typography variant="subtitle1" fontWeight={"bold"}>Messaggi</Typography>
            {messages ?

                <List >
                    {messages.map(m => (
                        <ListItem key={m._id} divider sx={{ p: 0, pb: 2 }}>
                            <Box>

                                <Typography
                                    color={"secondary"}
                                    variant="subtitle2">{dayjs(m.date).format("DD/MM/YYYY")}</Typography>
                                <Typography variant="body1">{m.text}</Typography>

                                {user && user.role === "ADMIN" ?
                                    <Button
                                        size="small"
                                        onClick={() => handleDelete(m._id)}
                                        color="warning"
                                        sx={{ mt: 2, p: 0 }}>Elimina
                                    </Button>
                                    : null}

                            </Box>
                        </ListItem>
                    ))}
                </List>
                : "Nessuna comunicazione"}
        </Container >
    )
}

export default ComunicazioniPage