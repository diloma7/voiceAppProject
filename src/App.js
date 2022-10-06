import './App.css';
import Login from './components/login';
import PasswordReset from './components/passwordReset';
import Register from './components/register';

function App() {
  return (
    <div className="App">
      <Login />
      <Register />
      <PasswordReset />
    </div>
  );
}

export default App;
