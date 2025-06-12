import { useState } from 'react';

function Detail(props){
  let id=props.id;
  let title=props.title;
  let price=props.price;
  return(
    <div>
      <p></p>
      <h4>&lt; {title} &gt;의 상세 페이지</h4>
      <img src={process.env.PUBLIC_URL + '/images/goods'+id+'.png'} alt='goods' height='300px'/>
      <p>₩ {price}</p>
    </div>
  )
}

export default Detail