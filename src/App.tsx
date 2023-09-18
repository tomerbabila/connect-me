import './App.scss';
import { ThemeProvider, Button } from '@mui/material';
import theme from './styles/theme';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Button color='primary'>Click me</Button>
        <Button color='secondary'>Click me</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
