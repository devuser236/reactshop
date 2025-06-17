import { useState } from 'react';
import Header from '../Header';
import { Button, Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import {  Route, Routes, Link, Navigate, Outlet, useNavigate, useParams} from 'react-router-dom';

function Payment(props){
  let {id} = useParams();
  let findGoods = props.goods.find(function(i){
    return i.id == id
  });
  return(
    <div>
      <Header/>
      <p></p>
      <h4>&lt; {findGoods.title} &gt;의 결제 페이지</h4>
      <img src={process.env.PUBLIC_URL + '/images/goods'+id+'.png'} alt='goods' height='300px'/>
      <p>{findGoods.content}</p>
      <p>{findGoods.price}원</p>
      <button variant="secondary" style={{fontSize:'12px'} } onClick={()=>{ props.navigate(-1); }}>뒤로가기</button>
    </div>
    
  )
}

export default Payment