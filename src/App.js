import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
// import { BrowserView, MobileView, isBrowser, isMobile, isSafari, isChrome } from "react-device-detect";
import {  Route, Routes, Link, href} from 'react-router-dom';
import data from './data.js';
import { useState } from 'react';
import Detail from './routes/Detail.js';

function App() {
   const [goods] = useState(data);
    let [id, setId] = useState('');
   const goodsDetail = (value)=>{
    setId(value);
   }
   return (
    <div className="App">
      <Routes>
        {/* 메인페이지 */}
        <Route path='/'element={
          <div>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Brand href="#home">
                  <h4><strong>React-Shop</strong></h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">주문폭주⭐</Nav.Link>
                    <Nav.Link href="#link">6월 추천 아이템😎</Nav.Link>
                    <NavDropdown title="유아가구🛋️" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">테이블&체어</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">책장&정리함</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">침대</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="베이비👶🏻" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">베이비룸</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">아기체어</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">턱받이</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">유아용품</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <div className='main-bg'>
            </div>
            <div>
              <br /><br /><br />
              <h4 style={{textAlign : 'center', fontSize : '28px'}}><strong>베스트 상품🏆</strong></h4><br />
            </div>
            <div>
              <Container>
                <Row style={{textAlign : 'center'}} >
                  {
                    goods.map(function(a, i){
                      return(
                        <GoodsList key={goods[i].id} goods={goods[i]} id={goods[i].id} goodsTitle={goods[i].title}  goodsDetail={goodsDetail}/>
                      );
                    })
                    }       
                </Row>
              </Container>
            </div>
        </div>}>
        </Route>
        {/* 제품상세보기 페이지 */}
        <Route path='/detail' element={<Detail id={id} title={goods[id].title} price={goods[id].price}/>}/>
      </Routes>
    </div>
  );
}
// 메인페이지 제품 리스트 함수
function GoodsList(props){
  return(
    <>
      <Col xs>
        <img src={process.env.PUBLIC_URL + '/images/goods'+props.id+'.png'} alt='goods' height='300px'/>
        <p/>
        <h4 style={{fontSize:'18px'}}><strong>{props.goods.title}</strong></h4>
        {props.goods.content}<br/>
        ₩{props.goods.price}        
        <br/>
          <Link to={'/detail'}><button variant="secondary" style={{fontSize:'12px'} } onClick={()=>{
            let copyId=props.id
            props.goodsDetail(copyId);
          }}>제품상세보기</button></Link>
        <br/>
        <br/>
      </Col>
    </>
  );
}


export default App;
