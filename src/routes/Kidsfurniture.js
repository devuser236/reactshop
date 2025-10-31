
import Header from '../Header';

import { Outlet } from 'react-router-dom';

function Kidsfurniture(props){
  return(
    <div>
      <Header navigate={props.navigate} />
      <p></p>
      <h4> 유아가구🛋️ </h4>
      <Outlet></Outlet>
      <button variant="secondary" className="login-button" style={{marginTop: '10px'}} onClick={()=>{ props.navigate('/'); }}>홈으로</button>
    </div>
  )
}

export default Kidsfurniture