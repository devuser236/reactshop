import { useEffect, useState } from 'react';
import Header from '../Header';
import { Button, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';



function Detail(props) {

  let [inputdata, setInputData] = useState(1);
  let [tab, setTab] = useState(0);
  let [alert1, setAlert1] = useState(true);
  let [alert2, setAlert2] = useState(true);
  useEffect(() => {
    if (isNaN((inputdata)) === true) {
      setAlert1(false);
    }
    return () => {
      //cleanup function (기존데이터요청은 제거)
      //useEffect 가 실행되기 전에 실행됨
      //최초 마운트 될때는 실행안되고 언마운트될때는 실행됨
      setAlert1(true);
    }
  }, [inputdata]);
  useEffect(() => {
    if ((inputdata) > 100) {
      setAlert2(false);
    }
    return () => {
      setAlert2(true);
    }
  }, [inputdata]);
  //[](Dependency)에 변수를 추가하여 해당 변수의 업데이트때만 실행 [count] 면 count가 업뎃되면 실행
  //[]가 공란이면 최초 랜더링 시에만 실행하며 이후 재랜더링이나 업데이트 시에 실행X
  // useEffect(()=>{ 1. 재랜더링 마다 코드 실행 });
  // useEffect(()=>{ 2. 마운트시 1회 코드 실행 }, []); 
  // useEffect(()=>{ 
  //  return ()=>{
  //    3. 언마운트시 1회 코드 실행(clean up function)
  //  }
  // }, [])
  let { id } = useParams();
  let findGoods = props.goods.find(function (i) {
    return i.id === Number(id)
  });

  return (
    <div>
      <Header navigate={props.navigate} />
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
      <>
        {alert1 === false ? <p>구매수량은 숫자만 입력 가능합니다.</p> : null}
        {alert2 === false ? <p>100개 이하로 구매하실 수 있습니다.</p> : null}
      </>
      <span style={{ paddingRight: '10px' }}><t>구매수량 : </t>
        <input value={inputdata} onChange={(e) => { setInputData(e.target.value) }} >
        </input>
      </span>
      <br /><br />
      <Button variant="secondary" style={{ fontSize: '12px', marginRight: '10px' }} onClick={() => { props.navigate(-1); }}>장바구니</Button>
      <Button variant="success" style={{ fontSize: '12px' }} onClick={() => {
        if (inputdata == 0) {
          alert('1개 이상부터 구매하실 수 있습니다.');
        } else if (alert1 === false) {
          alert('구매수량은 숫자만 입력 가능합니다.');
        } else if (alert2 === false) {
          alert('100개 이하로 구매하실 수 있습니다.');
        } else {
          props.navigate('/pay/' + findGoods.id, { state: { quantity: inputdata } })
        }
        // inputdata ? props.navigate('/pay/' + findGoods.id) : alert('구매 수량을 입력해주세요')
      }}>구매하기</Button>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">상세정보</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">Q&A</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(2) }} eventKey="link2">구매후기</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(3) }} eventKey="link3">판매자정보</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  )
}
function TabContent({ tab }) {
  let [fade, setFade] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setFade('end')
    }, 100);
    return () => { //useEffect 실행되기전에 실행
      setFade('');
    }
  }, [tab]);
  return (<div className={'start ' + fade}>

    {[<div>상세정보</div>, <div>Q&A</div>, <div>구매후기</div>, <div>판매자정보</div>][tab]}

  </div>)

}

export default Detail