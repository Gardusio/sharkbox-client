import React, { useState } from 'react';

import {
    Box,
    Button, Container, Dialog, DialogTitle, Typography, useTheme
} from '@mui/material';
import LessonCardContent from '../admin/lessons/components/LessonCardContent';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';

const JoinClassDialog = ({ lesson, joinLesson, open, close }) => {
    const theme = useTheme();

    return (

        <Dialog sx={{ p: 0 }} open={open} fullScreen>
            <DialogTitle
                textAlign={'center'}
                fontWeight={'bold'}
                bgcolor={theme.palette.bg.main}
                color={"#fff"}>
                {lesson.nome}
            </DialogTitle>

            <Container sx={{ mt: 4, ...theme.containers.column.center }}>
                <Typography
                    textAlign={"center"} variant='h6'>
                    {lesson.date}
                </Typography>
                <Typography
                    textAlign={"center"} variant='subtitle1'>
                    Dalle {lesson.start} alle {lesson.end}
                </Typography>

                <Box sx={{
                    px: 1,
                    mt: 4,
                    mb: 6,
                    ...theme.containers.column.centercenter
                }}>
                    <InfoTwoToneIcon />
                    <Typography
                        my={1}
                        textAlign={"center"} variant='subtitle1' fontWeight={"500"}>
                        La classe ha un limite di {lesson.max_partecipanti} persone
                    </Typography>

                    <Typography
                        textAlign={"center"} variant='body2'>
                        Se la classe è piena, verrai aggiunto in coda.
                        Ti invieremo una notifica se si libera un posto.
                    </Typography>

                </Box>


                <LessonCardContent lesson={lesson} />
                <Button
                    onClick={() => joinLesson(lesson)}
                    variant='contained' sx={{
                        width: "100%",
                        mt: 4,
                        color: "#fff"
                    }}>
                    Iscrivimi
                </Button>
                <Button
                    onClick={close}
                    variant='text'
                    sx={{
                        width: "100%",
                        mt: 2,
                    }}
                    color='warning'>
                    Indietro
                </Button>
            </Container>
        </Dialog>

    );
};

export default JoinClassDialog;
