import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [shox, setUsername] = useState('');
  const [shax, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (shox === 'geniy' && shax === '1234') {
      onLogin();
    } else {
      alert('логин или пароль неправильный!');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="login"
          value={shox}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={shax}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
