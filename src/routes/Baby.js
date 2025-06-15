import { useState } from 'react';
import Header from '../Header';
import { Button, Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import {  Route, Routes, Link, Navigate, Outlet, useNavigate} from 'react-router-dom';

function Baby(props){
  return(
    <div>
      <Header/>
      <p></p>
      <h4> 베이비👶🏻 </h4>
      <Outlet></Outlet>
      <button variant="secondary" style={{fontSize:'12px'} } onClick={()=>{ props.navigate('/'); }}>홈으로</button>
    </div>
  )
}

export default Baby