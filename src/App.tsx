import './App.scss';
import { ThemeProvider, Button } from '@mui/material';
import theme from './styles/theme';
import { getToken } from './features/auth/auth.actions';
import { BodyModel, GRANT_TYPE } from './features/auth/auth.model';
import { useAppDispatch } from './store';

function App() {
  const dispatch = useAppDispatch();

  const getTokenNow = () => {
    const data: BodyModel = {
      grant_type: GRANT_TYPE.CLIENT_CREDENTIALS,
      client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID || '',
      client_secret: process.env.REACT_APP_SPOTIFY_SECRET || '',
    };

    dispatch(getToken(data));
  };

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Button color='primary' onClick={getTokenNow}>
          Get token
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
