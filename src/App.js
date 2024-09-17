import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [name, setName] = useState("Bond!");
  const [count, setCount] = useState(0);

  // State for login form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to increment the count
  function increment(e) {
    e.preventDefault();
    setCount(count + 1);
  }

  // Function to decrement the count
  function decrement(e) {
    e.preventDefault();
    setCount(count - 1);
  }

  // Function to handle form submission
  function handleLogin(e) {
    e.preventDefault();
    // Simple login handler (you can add more logic here)
    alert(`Username: ${username}, Password: ${password}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, James {name}</h1>
        <button onClick={() => setName("Agent 007!")}>
          Click to change name
        </button>
        <br />
        <hr />
        <h2>The count is {count}</h2>
        <button onClick={increment}>
          Increment Count
        </button>
        <button onClick={decrement}>
          Decrement Count
        </button>
      </header>
      
      {/* Login Form */}
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
