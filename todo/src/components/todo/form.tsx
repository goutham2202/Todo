import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {addValue} from '../../redux/type'
export default function Form() {
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const dispatch=useDispatch()
  
  const navigate = useNavigate();
 
	 function submit(e:any) {
     e.preventDefault()
    const data = {
      email: email,
      gender: gender,
      id: '',
      name: name,
      status: status,
    };
    dispatch(({type:addValue,data}))
		
    navigate("/api");
  }
 

  return (
    <div>
      <form className="form-horizontal" onSubmit={submit} method="POST">
        <div className="form-group">
        <label className="control-label col-sm-2">
          email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        </div>
        <div className='form-group'>
        <label className="control-label col-sm-2">
          Gender:
          <input
            type="text"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </label>
        </div>
        <div className="form-group">
        <label className="control-label col-sm-2">
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </label>
   
       </div>
       <div className="form-group">
          <label className="control-label col-sm-2">
            Status:
            <input
              type="text"
              name="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </label>
          </div>
          <div className="form-group">
            <div>
          <input type="submit" className='btn btn-dark'/>
          </div>
          </div>
      </form>
    </div>
  );
}

/*const accessToken='545dcd6cc7d89c222990e5660b1213d5acd58c3dbefa440152985136a4b77738'
		const headers={
		 'Content-Type': "application/json",
		"Authorization": `Bearer ${accessToken}`,
		}

  axios.post('https://gorest.co.in/public/v2/users',addApi,
	{
   headers
	}).then((response:any)=>{
		console.log(response.data)
    const data=response.data.id

	}).catch((error:any)=>{
		console.log(error)
	})*/ 