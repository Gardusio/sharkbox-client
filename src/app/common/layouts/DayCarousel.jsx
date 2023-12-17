import React, { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import dayjs from 'dayjs';
import KeyboardArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardArrowLeftTwoTone';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';

const DayCarousel = ({ fetchLessons }) => {
    const [activeDate, setActiveDate] = useState(null);
    const [days, setDays] = useState([]);

    useEffect(() => {
        fetchDays(dayjs());
    }, []);

    const fetchDays = (startDate) => {
        const endMonth = startDate.add(3, 'month');
        const newDays = Array.from({ length: endMonth.diff(startDate, 'day') + 1 }, (_, index) =>
            startDate.add(index, 'day')
        );

        setDays(newDays);
        setActiveDate(newDays[0]);
        fetchLessons(newDays[0])
    };

    const handleDayClick = (day) => {
        setActiveDate((prevDate) => (day.isSame(prevDate, 'day') ? null : day));
        fetchLessons(day)
    };

    return (
        <React.Fragment>
            <Container style={{
                display: "flex",
                alignItems: "center",
                margin: "auto",
                width: "100%",
                padding: "32px 0 24px 0",
            }}>
                <KeyboardArrowLeftTwoToneIcon sx={{ color: "rgba(0,0,0,0.3)", marginTop: "-2px" }}></KeyboardArrowLeftTwoToneIcon>
                <Container sx={{ m: 0, p: 0 }}>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={130}
                        totalSlides={days.length}
                        visibleSlides={5}
                    >
                        <Slider>
                            {days.map((day, index) => (
                                <Slide
                                    index={index}
                                    key={index}
                                    onClick={() => handleDayClick(day)}
                                >
                                    <Box sx={{
                                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                                        backgroundColor: day.isSame(activeDate, 'day') ? "#edb230" : "#FCFAFA",
                                        color: day.isSame(activeDate, 'day') ? "#fff" : "#000",
                                        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
                                        borderRadius: "4px",
                                        margin: "0 4px",
                                        padding: "0",
                                        border: "1px solid rgba(0,0,0,0.16)"
                                    }}>
                                        <Typography fontSize={"12px"}>{`${day.format("MMM")}`}</Typography>
                                        <Typography variant="h6">{`${day.date()}`}</Typography>
                                        <Typography fontSize={"14px"}>{day.format('ddd')}</Typography>
                                    </Box>
                                </Slide>
                            ))}
                        </Slider>
                    </CarouselProvider>
                </Container>
                <KeyboardArrowRightTwoToneIcon sx={{ color: "rgba(0,0,0,0.3)", marginTop: "-2px" }}></KeyboardArrowRightTwoToneIcon>
            </Container>
        </React.Fragment >
    );
};

export default DayCarousel;
