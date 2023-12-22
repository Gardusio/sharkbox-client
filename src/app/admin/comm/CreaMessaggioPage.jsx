import { Box, Button, Container, Typography, formGroupClasses, useTheme } from "@mui/material"
import { useState } from "react"
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import PrimaryButton from "../../common/buttons/PrimaryButton";
import dayjs from "dayjs";
import { useNavigate } from "react-router";
import { createMessage } from "../../../api/messages.api";


const CreaMessaggioPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = () => {
        createMessage(message)
            .then(r => navigate("/messaggi"))
            .catch(e => setError("Qualcosa è andato storto, riprova più tardi"))
            .finally(() => setMessage(null))
    }

    return (
        <Container sx={{ py: 2, px: 4 }}>
            {error ? <Typography variant="body1" textAlign={"center"} color={"error"}>{error}</Typography>
                :
                <Box sx={{
                    width: "100%",
                    ...theme.containers.column.centercenter,
                    gap: 4
                }}>
                    <Typography variant="h6">{dayjs().format("DD/MM/YYYY")}</Typography>
                    <TextareaAutosize
                        onChange={(e) => setMessage(e.target.value)}
                        maxRows={5}
                        minRows={5}
                        style={{
                            width: "100%",
                            ...theme.containers.borders.main,
                            padding: "8px"
                        }}
                        placeholder="Crea un nuovo messaggio"
                    />
                    <PrimaryButton
                        action={handleSubmit}
                        text={"INVIA"} px={10} />
                </Box>
            }
        </Container>
    )
}

export default CreaMessaggioPage