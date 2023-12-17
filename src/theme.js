import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        bg: {
            main: '#00050F',
            light: '#FCFAFA'
        },
        text: {
            light: '#fff',
            main: '#2F2F2F',
        },
        primary: {
            main: '#21a179',
            dark: '#2f2f2f'
        },
        secondary: {
            main: '#647aa3',
        },
        warning: {
            main: "#942911"
        }
    },
    shadows: {
        primary: {
            main: "rgba(0, 0, 0, 0.16) 0px 1px 4px"
        }
    },
    containers: {
        row: {
            center: {
                display: "flex",
                alignItems: "center",
            },
            centercenter: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%"
            },
            centerbetween: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            },
            centerevenly: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
            },
            centerend: {
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
            },
        },
        column: {
            centerbetween: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
            },
            centerend: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
            },
            centercenter: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            },
            centerevenly: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
            }
        },
        borders: {
            main: {
                border: "1px solid rgba(0,0,0,0.2)",
                borderRadius: "4px"
            }
        }
    }

});

export default theme;
