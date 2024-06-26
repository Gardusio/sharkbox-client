import { List, useTheme } from '@mui/material';

import QueueTwoToneIcon from '@mui/icons-material/QueueTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import CardListItem from "../../../common/layouts/CardListItem"


const LessonCardContent = ({ lesson }) => {
    const theme = useTheme();

    return (
        <List sx={{ p: 0 }}>

            <CardListItem
                label={"Iscritti"}
                value={`${lesson.partecipanti.length} / ${lesson.max_partecipanti} `}
                icon={GroupsTwoToneIcon} />

            <CardListItem
                label={"In coda"}
                value={`${lesson.coda.length}`}
                icon={QueueTwoToneIcon} />
        </List>

    );
};

export default LessonCardContent;
