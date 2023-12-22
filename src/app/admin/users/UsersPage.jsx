import { Box, IconButton, List, ListItem, ListItemText, Typography, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { getAllUsers } from "../../../api/users.api";
import { useNavigate } from "react-router";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const users = await getAllUsers();
            setUsers(users);
        };

        fetchData();
    }, []);

    const handleContact = (phone) => {
        const url = `https://wa.me/${phone}?`;
        window.open(url, '_blank');
    };

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.lastname.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Box px={2}>
            <TextField
                label="Cerca qualcuno"
                fullWidth
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ my: 2 }}
            />

            <List>
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user, index) => (
                        <ListItem
                            divider
                            sx={{ px: 1, py: 2 }}
                            key={index}
                            disableGutters
                            secondaryAction={
                                <IconButton
                                    variant="text"
                                    color="primary"
                                    onClick={() => handleContact(user.phone)}
                                >
                                    <WhatsAppIcon />
                                </IconButton>
                            }
                        >
                            <ListItemText primary={`${user.name} ${user.lastname}`} />
                        </ListItem>
                    ))
                ) : (
                    <Typography
                        mt={2}
                        fontSize={"16px"}
                        textAlign={"center"}
                        color={"#7a7a7a"}
                    >
                        Nessun utente
                    </Typography>
                )}
            </List>
        </Box>
    );
};

export default UsersPage;
