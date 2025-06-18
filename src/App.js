import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
// import { BrowserView, MobileView, isBrowser, isMobile, isSafari, isChrome } from "react-device-detect";
import {  Route, Routes, Link, Navigate, Outlet, useNavigate} from 'react-router-dom';
import data from './data.js';
import { useState } from 'react';
import Header from './Header.js';
import Detail from './routes/Detail.js';
import Kidsfurniture from './routes/Kidsfurniture.js';
import Baby from './routes/Baby.js';
import Payment from './routes/Payment.js';


function App() {
  const [goods] = useState(data);
  let navigate = useNavigate();
  let [id, setId] = useState('0');

  // 사용안하는 함수
  // 컴포넌트 안에서 실행해서 props로 id를 다른 페이지에 전달하기 위함 url 파라미터로 대체
  const goodsDetail = (value)=>{
    setId(value);
  }

   return (
    <div className="App">
      <Routes>
        {/* 메인페이지 */}
        <Route path='/'element={
          <div>
            <Header/>
            <div className='main-bg'/>
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
                        <GoodsList key={goods[i].id} goods={goods[i]} id={goods[i].id} goodsTitle={goods[i].title} navigate={navigate}/>
                      );
                    })
                    }       
                </Row>
              </Container>
            </div>
        </div>}>
        </Route>
        {/* 제품상세보기 페이지 */}
        <Route path='/detail/:id' element={<Detail goods={goods} navigate={navigate}/>}/>
        {/* 유아가구 페이지 */}
        <Route path='/kidsfurniture' element={<Kidsfurniture navigate={navigate} />}>
                    <Route path='table' element={<div>Kid's 테이블 & 체어</div>}/>
                    <Route path='bookcase' element={<div>Kid's 책장 & 정리함</div>}/>
                    <Route path='bed' element={<div>Kid's 침대</div>}/>
        </Route>
        {/* 베이비 페이지 */}
        <Route path='/baby' element={<Baby navigate={navigate} />}>
                    <Route path='room' element={<div> 베이비룸 </div>}/>
                    <Route path='chair' element={<div> 아기체어 </div>}/>
                    <Route path='bib' element={<div> 턱받이 </div>}/>
                    <Route path='products' element={<div> 유아용품 </div>}/>
        </Route>
        {/* 상품 결제페이지 */}
        <Route path='/pay/:id' element={<Payment navigate={navigate} goods={goods}></Payment>}></Route>
      </Routes>
    </div>
  );
}
// 메인페이지 제품 리스트 함수
function GoodsList(props){
  return(
    <>
      <Col xs >
        <img src={process.env.PUBLIC_URL + '/images/goods'+props.id+'.png'} alt='goods' height='300px'className='hand-cursor' onClick={()=> {
          props.navigate('/detail/'+ props.id) 
        }}/>
        <p/>
        <h4 style={{fontSize:'18px'}} className='hand-cursor' onClick={()=>{ props.navigate('/detail/'+ props.id) }}><strong>{props.goods.title}</strong></h4>
        <p className='hand-cursor' onClick={()=>{ props.navigate('/detail/'+ props.id) }}>{props.goods.content}</p>
        <p className='hand-cursor' onClick={()=>{ props.navigate('/detail/'+ props.id) }}>{props.goods.price}원</p>       
        <br/>
        <Button variant="secondary" style={{fontSize:'12px', height:'40px'} } onClick={()=>{
          props.navigate('/detail/'+ props.id) 
        }}>제품상세보기</Button>
        <br/>
        <br/>
      </Col>
    </>
  );
}


export default App;
