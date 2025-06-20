import { useEffect, useState } from 'react';
import Header from '../Header';
import { Button, Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { Route, Routes, Link, Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';
import Payment from './Payment';
import styled from 'styled-components';

function Detail(props) {
  let [count, setCount] = useState(0);
  let [inpudate, setInputDate] = useState(0);
  let [alert, setAlert] = useState(true);
  useEffect(() => {
    if (isNaN((inpudate)) == true) {
      setAlert(false);
    }
    return () => {
      //cleanup function (기존데이터요청은 제거)
      //useEffect 가 실행되기 전에 실행됨
      //최초 마운트 될때는 실행안되고 언마운트될때는 실행됨
      setAlert(true);
    }
  }, [inpudate]);
  //[](Dependency)에 변수를 추가하여 해당 변수의 업데이트때만 실행 [count] 면 count가 업뎃되면 실행
  //[]가 공란이면 최초 랜더링 시에만 실행하며 이후 재랜더링이나 업데이트 시에 실행X
  // useEffect(()=>{ 1. 재랜더링 마다 코드 실행 });
  // useEffect(()=>{ 2. 마운트시 1회 코드 실행 }, []); 
  // useEffect(()=>{ 
  //  return ()=>{
  //    3. 언마운트시 1회 코드 실행
  //  }
  // }, [])
  let { id } = useParams();
  let findGoods = props.goods.find(function (i) {
    return i.id == id
  });
  return (
    <div>
      <Header />
      <p></p>
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
      {
        alert == false ? <p>수량은 숫자만 입력 가능합니다.</p> : null
      }
      <span style={{ paddingRight: '10px' }}>수량
        <input onChange={(e) => { setInputDate(e.target.value) }}></input>
      </span>
      <br /><br />
      <Button variant="secondary" style={{ fontSize: '12px', marginRight: '10px' }} onClick={() => { props.navigate(-1); }}>장바구니</Button>
      <Button variant="success" style={{ fontSize: '12px' }} onClick={() => {
        props.navigate('/pay/' + findGoods.id)
      }}>구매하기</Button>
    </div>
  )
}

export default Detail