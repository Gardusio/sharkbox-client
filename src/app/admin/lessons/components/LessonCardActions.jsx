import {
    CardActions, useTheme
} from '@mui/material';
import AdminActionButtons from './AdminActionButtons';
import UserActionButtons from '../../../users/UserActionButtons';

const LessonCardActions = ({ lesson, deleteLesson, joinLesson, isAdmin }) => {

    const theme = useTheme()

    return (
        <CardActions
            sx={{
                ...theme.containers.row.centerbetween,
                pt: 2,
                mb: 1,
                px: 2
            }}>

            {isAdmin ?
                <AdminActionButtons lesson={lesson} deleteLesson={deleteLesson} />

                : <UserActionButtons lesson={lesson} joinLesson={joinLesson} />
            }
        </CardActions>

    );
};

export default LessonCardActions;
