import BoxRoutes from './app/routes/BoxRoutes';
import UserProvider from './app/context/UserProvider';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/it';


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="it">
      <UserProvider>
        <BoxRoutes />
      </UserProvider >
    </LocalizationProvider>
  )
}

export default App;
