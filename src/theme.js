import { createTheme } from '@mui/material/styles';



const theme = createTheme({
    palette: {
        bg: {
            main: '#2B2A29',
            light: '#FCFAFA'
        },
        text: {
            light: '#fff',
            main: '#2B2A29',
        },
        primary: {
            main: '#08BDBD',
            dark: '#2B2A29',
            light: '#fff'
        },
        secondary: {
            main: '#999933',
        },
        warning: {
            main: "#7a7a7a"
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
                borderRadius: "8px"
            },
            highlighted: {
                border: "1px solid #08BDBD",
                borderRadius: "8px"
            }
        },
        shadows: {
            primary: {
                main: "rgba(0, 0, 0, 0.16) 0px 1px 3px",
                highlighted: "#08BDBD 0px 0px 3px"
            }

        }

    },
    typography: {
        allVariants: {
            color: "#2B2A29"
        }
    }
})

export default theme;
