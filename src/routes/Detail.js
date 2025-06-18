import { useEffect, useState } from 'react';
import Header from '../Header';
import { Button, Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { Route, Routes, Link, Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';
import Payment from './Payment';
import styled from 'styled-components';

function Detail(props) {

  useEffect(() => {
    setTimeout(()=>{
      setSale(!sale);
      console.log('10초됨')
    }, 10000);
  })
  let [sale, setSale] = useState(true);

  let { id } = useParams();
  let findGoods = props.goods.find(function (i) {
    return i.id == id
  });
  return (
    <div>
      <Header />
      <p></p>
      {
        sale == 1 ? <Sale /> : null
      }
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/goods' + id + '.png'} alt='이미지 설명' height='300px' />
        </div>
        <div style={{ textAlign: 'left', marginLeft: '10px', width: '300px' }}>
          <h4>{findGoods.title}</h4>
          <p>{findGoods.content}</p>
        </div>

      </div>
      <p>{findGoods.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
      <Button variant="secondary" style={{ fontSize: '12px', marginRight: '10px' }} onClick={() => { props.navigate(-1); }}>장바구니</Button>
      <Button variant="success" style={{ fontSize: '12px' }} onClick={() => {
        props.navigate('/pay/' + findGoods.id)
      }}>구매하기</Button>
    </div>
  )
}
function Sale() {
  return (
    <div style={{ backgroundColor: 'yellow' }}>
      10초 후 세일 마감!!
    </div>
  )
}
export default Detail