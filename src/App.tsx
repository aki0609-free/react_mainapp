import { useNavigate } from 'react-router-dom';
import './App.css';
import { TheHeader } from './components/layout/TheHeader';
import { Router } from './router/Router';

export const App = () => {
  return (
    <div className="App">
      <TheHeader />
      <Router />
    </div>
  );
}
