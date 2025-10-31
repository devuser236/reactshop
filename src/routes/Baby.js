
import Header from '../Header';

import { Outlet } from 'react-router-dom';

function Baby(props){
  return(
    <div>
      <Header navigate={props.navigate} />
      <p></p>
      <h4> 베이비👶🏻 </h4>
      <Outlet></Outlet>
      <button variant="secondary" className="login-button" style={{marginTop: '10px'}} onClick={()=>{ props.navigate('/'); }}>홈으로</button>
    </div>
  )
}

export default Baby