import { List, useTheme } from '@mui/material';

import QueueTwoToneIcon from '@mui/icons-material/QueueTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import CardListItem from "../../../common/layouts/CardListItem"


const LessonCardContent = ({ lesson }) => {
    const theme = useTheme();

    return (
        <List >

            <CardListItem
                label={"Iscritti"}
                value={`${lesson.partecipanti.length} persone`}
                icon={GroupsTwoToneIcon} />

            <CardListItem
                label={"In coda"}
                value={`${lesson.coda.length} persone`}
                icon={QueueTwoToneIcon} />
        </List>

    );
};

export default LessonCardContent;
