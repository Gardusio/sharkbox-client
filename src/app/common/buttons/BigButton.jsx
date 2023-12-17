import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';

const BigButton = ({ path, text }) => {

    return (
        <Link to={path}
            style={{
                display: "flex", flexDirection: "column", gap: "6px",
                alignItems: "center", justifyContent: "center",
                textDecoration: "none", color: "#2f2f2f",
                width: "100%"
            }}>
            <AddIcon
                sx={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "4px",
                    padding: 1,
                    margin: "auto",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                    color: "#fff", backgroundColor: "#52AA5E"
                }}>
            </AddIcon>
            <Typography variant='subtitle1' color={"#2f2f2f"} fontWeight={"bold"}>{text}</Typography>
        </Link >
    );
};

export default BigButton;
