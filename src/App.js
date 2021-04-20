import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Messages from './components/Messages';

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  return (
    <div>
      <h1>Messages</h1>
      {
        (user == null && token !== "") ?
          <Login setUser={ setUser } setToken={ setToken } /> :
          <Messages token={ token } userId={ user._id } />
      }
    </div>
  );
}

export default App;
