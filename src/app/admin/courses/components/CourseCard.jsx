import { useNavigate } from 'react-router-dom';
import { Typography, List, ListItem, Button, Card, CardContent, CardActions, Box, useTheme } from '@mui/material';
import dayjs from 'dayjs'
import CardListItem from '../../../common/layouts/CardListItem';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import ScheduleTwoToneIcon from '@mui/icons-material/ScheduleTwoTone';


const CourseCard = ({ course, deleteCourse }) => {
    const theme = useTheme();
    const navigate = useNavigate()

    return (
        <Card variant="outlined"
            sx={{
                width: "92%",
                margin: "auto",
                boxShadow: theme.containers.shadows.primary.main,
                background: "#fcfafa",
            }} >

            <CardContent sx={{ p: 0 }} onClick={() => navigate(`/corsi/modifica/${course.id}`)}>

                <Typography
                    fontWeight={"bold"}
                    variant="h5"
                    textAlign={"center"}
                    py={2}
                >
                    {course.nome}
                </Typography>


                <List>
                    <CardListItem label={"Massimo"} value={`${course.max_partecipanti} persone`} icon={GroupsTwoToneIcon} />
                    
                    <CardListItem label={"Disdetta"} value={`${course.anticipo_disdetta} minuti prima`} icon={ScheduleTwoToneIcon} />
                    
                    <CardListItem label={"Anticipo"} value={`${course.anticipo_prenotazione} ore prima`} icon={ScheduleTwoToneIcon} />
                    
                    <CardListItem label={"Palinsesto"} value={`${dayjs(course.slots_end_date).format("DD/MM/YYYY")}`} icon={CalendarMonthIcon} />
                </List>
            </CardContent>

            <CardActions sx={{ display: 'flex', alignItems: "center", justifyContent: "flex-end", px: 2, pt: 2 }}>
                <Button
                    variant="text"
                    color='warning'
                    onClick={async () => await deleteCourse(course)}>
                    Elimina
                </Button>
            </CardActions>
        </Card>
    );
};

export default CourseCard;
