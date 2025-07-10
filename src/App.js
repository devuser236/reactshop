import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
// import { BrowserView, MobileView, isBrowser, isMobile, isSafari, isChrome } from "react-device-detect";
import { Route, Routes, Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination } from "swiper/modules";
import data from './data.js';
import { useState } from 'react';
import Header from './Header.js';
import Detail from './routes/Detail.js';
import Kidsfurniture from './routes/Kidsfurniture.js';
import Baby from './routes/Baby.js';
import Payment from './routes/Payment.js';
import axios from 'axios';


function App() {
  const [goods, setGoods] = useState(data);
  const [more, setMore] = useState(2);
  let navigate = useNavigate();
  // 사용안하는 함수
  // 컴포넌트 안에서 실행해서 props로 id를 다른 페이지에 전달하기 위함 url 파라미터로 대체
  let [id, setId] = useState('0');
  const goodsDetail = (value) => {
    setId(value);
  };

  return (
    <div className="App">
      <Routes>
        {/* 메인페이지 */}
        <Route path='/' element={
          <div>
            <Header />
            <div >
              <MainSlide />
            </div>
            <div>
              <h4 style={{ textAlign: 'center', fontSize: '28px' }}><strong>베스트 상품🏆</strong></h4><br />
            </div>
            <div>
              <Container>
                <Row style={{ textAlign: 'center' }} >
                  {
                    goods.map(function (a, i) {
                      return (
                        <GoodsList key={goods[i].id} goods={goods[i]} id={goods[i].id} goodsTitle={goods[i].title} navigate={navigate} />
                      );
                    })
                  }
                </Row>
              </Container>
            </div>
            {
              more <= 3 ?
                <Button variant="success" onClick={() => {
                  axios.get('https://codingapple1.github.io/shop/data' + more + '.json')
                    .then((result) => {
                      let newArr = [...goods, ...result.data]
                      console.log(newArr)
                      setGoods(newArr);
                      setMore(more+1);
                    })
                    .catch(() => {
                      //예외처리
                      console.log('실패')
                    })
                }}> 상품 더보기</Button> : <p>더 이상 상품이 존재하지 않습니다.</p>
            }
          </div>}>
        </Route>
        {/* 제품상세보기 페이지 */}
        <Route path='/detail/:id' element={<Detail goods={goods} navigate={navigate} />} />
        {/* 유아가구 페이지 */}
        <Route path='/kidsfurniture' element={<Kidsfurniture navigate={navigate} />}>
          <Route path='table' element={<div>Kid's 테이블 & 체어</div>} />
          <Route path='bookcase' element={<div>Kid's 책장 & 정리함</div>} />
          <Route path='bed' element={<div>Kid's 침대</div>} />
        </Route>
        {/* 베이비 페이지 */}
        <Route path='/baby' element={<Baby navigate={navigate} />}>
          <Route path='room' element={<div> 베이비룸 </div>} />
          <Route path='chair' element={<div> 아기체어 </div>} />
          <Route path='bib' element={<div> 턱받이 </div>} />
          <Route path='products' element={<div> 유아용품 </div>} />
        </Route>
        {/* 상품 결제페이지 */}
        <Route path='/pay/:id' element={<Payment navigate={navigate} goods={goods}></Payment>}></Route>
      </Routes>

    </div>
  );
}
// 메인페이지 제품 리스트 컴포넌트
function GoodsList(props) {
  return (
    <>
      <Col xs >
        <img src={process.env.PUBLIC_URL + '/images/goods' + props.id + '.png'} alt='goods' height='300px' className='hand-cursor' onClick={() => {
          props.navigate('/detail/' + props.id)
        }} />
        <p />
        <h4 style={{ fontSize: '18px' }} className='hand-cursor' onClick={() => { props.navigate('/detail/' + props.id) }}><strong>{props.goods.title}</strong></h4>
        <p className='hand-cursor' onClick={() => { props.navigate('/detail/' + props.id) }}>{props.goods.content}</p>
        <p className='hand-cursor' onClick={() => { props.navigate('/detail/' + props.id) }}>{props.goods.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 </p>
        <br />
        <Button variant="secondary" style={{ fontSize: '12px', height: '40px' }} onClick={() => {
          props.navigate('/detail/' + props.id)
        }}>제품상세보기</Button>
        <br />
        <br />
      </Col>
    </>
  );
}
//배너 슬라이드
const MainSlide = () => {
  return (
    <div className='main-bg'>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000, // 슬라이드 간의 지연 시간 (밀리초 단위)
          disableOnInteraction: false, // 사용자가 슬라이드를 건드린 후에도 자동 재생 계속
        }}>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/images/main_bg0.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/images/main_bg1.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/images/main_bg2.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/images/main_bg3.jpg'} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default App;
