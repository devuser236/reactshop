import React, { useState } from 'react';
import '../App.css';
import Header from '../Header';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div>
      <Header navigate={props.navigate} />
      <div className="login-container">
      <h2>로그인</h2>
      <form className="login-form">
        <label>아이디</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="button" onClick={handleLogin} className="login-button">
          로그인
        </button>
        <button type="button" onClick={() => props.navigate('/register')} className="login-button" style={{marginTop: '10px'}}>
          회원가입
        </button>
      </form>
      </div>
    </div>
  );
}

export default Login;