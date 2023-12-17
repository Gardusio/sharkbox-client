import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material/';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export default function SimpleTopBar({ props }) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ display: 'flex', bgcolor: "#2f2f2f", height: "80px", justifyContent: "center", position: "fixed" }}>
                <Toolbar>
                    <Typography component="div" variant="h6" sx={{ flexGrow: 1 }}>
                        {props.title}
                    </Typography>
                    {props.withBtn ?
                        <Button variant='contained' sx={{ color: "#fff", bgcolor: `${props.bgcol}` }} startIcon={props.withIcon ? <AddIcon /> : null}>
                            <Link to={props.link} style={{ textDecoration: "none", color: "#fff" }}>
                                {props.btnText}
                            </Link>
                        </Button> : null
                    }
                </Toolbar>
            </AppBar>
        </Box >
    );
}