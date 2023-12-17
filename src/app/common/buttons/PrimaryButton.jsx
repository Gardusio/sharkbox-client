import { useTheme } from "@mui/material/styles"
import { Button } from "@mui/material";

const PrimaryButton = ({ text, action, bgcol, col, px }) => {
    const theme = useTheme();
    return (
        <Button
            variant="contained"
            sx={{
                bgcolor: bgcol || theme.palette.primary.main,
                color: col || theme.palette.text.light,
                px: px || 2
            }}
            onClick={action}
        >{text}
        </Button>
    )
}

export default PrimaryButton