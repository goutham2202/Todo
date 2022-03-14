import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {Link,useNavigate} from 'react-router-dom'
import {listApi} from '../../redux/type'


export default function ApiList() {
  
  const selecting = useSelector((state: any) => state.items);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  function responsing(responsed:any) {
   dispatch({type:listApi,responsed})
  }
  function navigation() {
  navigate('/api/add')
  }
  return (
    <div>
      <button className='btn btn-primary' onClick={navigation}>Add</button>
      <h1>List of Names</h1>
    <ul>{selecting.map((response:any)=>{
      const responsed=response.name
      return (<div key={response.id}>
        <nav>
    <Link className="link" to='/api/user'><li onClick={()=>responsing(responsed)}>{response.name}</li></Link> 
    </nav>
     </div>)
})}</ul>
    </div>
  );
}
