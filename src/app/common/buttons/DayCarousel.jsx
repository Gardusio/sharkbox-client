import React, { useState, useEffect } from 'react';
import { Container, useTheme } from '@mui/material';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import dayjs from 'dayjs';
import KeyboardArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardArrowLeftTwoTone';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import CarouselItem from './CarouselItem';

const DayCarousel = ({ fetchLessons }) => {
    const theme = useTheme();
    const [activeDate, setActiveDate] = useState(null);
    const [days, setDays] = useState([]);

    useEffect(() => {
        const fetchDays = (startDate) => {
            const endMonth = startDate.add(3, 'month');
            const newDays = Array.from({ length: endMonth.diff(startDate, 'day') + 1 }, (_, index) =>
                startDate.add(index, 'day')
            );

            setDays(newDays);
            setActiveDate(newDays[0]);
            fetchLessons(newDays[0])
        };

        fetchDays(dayjs());
    }, []);


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
                padding: "24px 0",
            }}>
                <KeyboardArrowLeftTwoToneIcon sx={{ color: "rgba(0,0,0,0.3)", marginTop: "-2px" }} />
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

                                    <CarouselItem
                                        day={day}
                                        isActive={day.isSame(activeDate, 'day')}
                                    />
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
