import { createTheme } from '@mui/material/styles';

const primary_main = "#08BDBD"
const secondary_main = "#999933"

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
            main: primary_main,
            dark: '#2B2A29',
            light: '#fff'
        },
        secondary: {
            main: secondary_main,
            light: '#fff'
        },
        warning: {
            main: "#7a7a7a",
            light: '#fff'
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
                border: "1px solid",
                borderColor: primary_main,
                borderRadius: "8px"
            }
        },
        shadows: {
            primary: {
                main: "rgba(0, 0, 0, 0.16) 0px 1px 3px",
                highlighted: `${primary_main} 0px 0px 3px`
            }

        }

    },
    typography: {
        allVariants: {
            color: "#2B2A29"
        }
    }
})


export const getItaDay = (day) => {
    switch (day) {
        case "Mon": return "Lun"
        case "Tue": return "Mar"
        case "Wed": return "Mer"
        case "Thu": return "Gio"
        case "Fri": return "Ven"
        case "Sat": return "Sab"
        case "Sun": return "Dom"
        default: return ""
    }
}

export const getItaMonth = (day) => {
    switch (day) {
        case "Dec": return "Dic"
        case "Jan": return "Gen"
        case "Feb": return "Feb"
        case "Mar": return "Mar"
        case "Apr": return "Apr"
        case "May": return "Mag"
        case "Jun": return "Giu"
        case "Jul": return "Lug"
        case "Aug": return "Ago"
        case "Sep": return "Set"
        case "Opt": return "Ott"
        case "Nov": return "Nov"
        default: return ""
    }
}

export default theme;
