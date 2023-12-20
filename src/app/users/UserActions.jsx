import React, { useContext, useState } from 'react';

import { Box, Button, Typography, useTheme } from '@mui/material';

import JoinClassDialog from './JoinClassDialog';
import { UserContext } from '../context/UserProvider';

const UserActionButtons = ({ lesson, joinLesson, leaveLesson }) => {
    const { user } = useContext(UserContext)
    const theme = useTheme();

    const [isModalOpen, setIsModalOpen] = useState(false)
    const joined = lesson.partecipanti.some(u => u.id === user.id);
    const queued = lesson.coda.some(u => u.id === user.id)

    const joinBtn = () => {
        return (<Button
            color='primary'
            sx={{
                px: 3,
                borderRadius: "4px",
                bgcolor: theme.palette.primary.main, color: "#fff"
            }}
            onClick={() => setIsModalOpen(true)}
            aria-label="partecipanti">
            Iscriviti
        </Button>)
    }

    return (
        <React.Fragment>

            {
                joined ?
                    <Box sx={{ ...theme.containers.row.centerbetween, width: "100%", p: 0 }}>
                        <Typography
                            pl={1}
                            color={"primary"}
                            variant='subtitle2'
                            fontWeight={"600"} >ISCRITTO
                        </Typography>
                        <Button
                            onClick={() => leaveLesson(lesson)}
                            variant='text' color='warning'>Abbandona</Button>
                    </Box> :
                    queued ?
                        <Box sx={{ ...theme.containers.row.centerbetween, width: "100%", p: 0 }}>
                            <Typography
                                pl={1}
                                color={"error"}
                                variant='subtitle2' fontWeight={"600"} >IN CODA
                            </Typography>
                            <Button
                                onClick={() => leaveLesson(lesson)}
                                variant='text' color='warning'>Abbandona</Button>
                        </Box>
                        :
                        joinBtn()
            }


            <JoinClassDialog
                lesson={lesson}
                joinLesson={joinLesson}
                open={isModalOpen}
                close={() => setIsModalOpen(false)} />


        </React.Fragment >

    );
};

export default UserActionButtons;
