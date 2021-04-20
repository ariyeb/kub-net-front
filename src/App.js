import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Messages from './components/Messages';

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <div>
      <h1>Messages</h1>
      {
        userData == null ?
          <Login setUserData={ setUserData } /> :
          <Messages userData={ userData } />
      }
    </div>
  );
}

export default App;
