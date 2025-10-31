import React from 'react';
import '../App.css';
import Header from '../Header';

function Register(props) {
  return (
    <div>
      <Header navigate={props.navigate} />
      <div className="login-container">
      <h2>회원가입</h2>
      <form className="login-form">
        <label>아이디</label>
        <input className="login-input" type="text" />
        <label>비밀번호</label>
        <input className="login-input" type="password" />
        <label>비밀번호 확인</label>
        <input className="login-input" type="password" />
        <button className="login-button" type="button">
          회원가입
        </button>
      </form>
      </div>
    </div>
  );
}

export default Register;
