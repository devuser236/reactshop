import { useState } from 'react';
import Header from '../Header';
import { Button, Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import {  Route, Routes, Link, Navigate, Outlet, useNavigate, useParams} from 'react-router-dom';

function Detail(props){
  let {id} = useParams();
  return(
    <div>
      <Header/>
      <p></p>
      <h4>&lt; {props.goods[id].title} &gt;의 상세 페이지</h4>
      <img src={process.env.PUBLIC_URL + '/images/goods'+id+'.png'} alt='goods' height='300px'/>
      <p>{props.goods[id].content}</p>
      <p>{props.goods[id].price}원</p>
      <button variant="secondary" style={{fontSize:'12px'} } onClick={()=>{ props.navigate(-1); }}>뒤로가기</button>
    </div>
  )
}

export default Detail