import BoxRoutes from './app/routes/BoxRoutes';
import UserProvider from './app/context/UserProvider';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';
import 'dayjs/locale/it';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="it">
      <ThemeProvider theme={theme}>
        <UserProvider>
          <BoxRoutes />
        </UserProvider >
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export default App;
