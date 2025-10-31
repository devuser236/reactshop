
import Header from '../Header';
import { Button } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';

function Payment(props){
  let {id} = useParams();
  const location = useLocation();
  const { quantity } = location.state;
  let findGoods = props.goods.find(function(i){
    return i.id === Number(id)
  });
  let totalprice=findGoods.price*quantity;
  return(
    <div>
      <Header navigate={props.navigate} />
      <p></p>
      <h4>&lt; {findGoods.title} &gt;의 결제 페이지</h4>
      <img src={process.env.PUBLIC_URL + '/images/goods'+id+'.png'} alt='goods' height='300px'/>
      <h4>{findGoods.content}</h4><br/>
      <p>제품 가격: {findGoods.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
      <p>구매 수량: {quantity}</p>
      <p>최종 결제 금액: {totalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
      <Button variant="secondary" style={{marginTop: '10px'}} onClick={()=>{ props.navigate(-1); }}>뒤로가기</Button> &nbsp;
      <Button variant="success" style={{marginTop: '10px'}} onClick={()=>{ props.navigate(-1); }}>결제하기</Button>
    </div>
    
  )
}

export default Payment