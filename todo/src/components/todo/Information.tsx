import React from 'react'
import {useSelector} from 'react-redux'
export default function Information () {
    const selecting=useSelector((state:any)=>state.items)
    const particular=useSelector((state:any)=>state.works)
   
    
    return (
  <div>
     
     Email {selecting.map((response:any)=>{
          if(response.name===particular) {
              return (
                  <div key={response.id}>
                  <h1>{response.email}</h1>
                  <h1>{response.status}</h1>
                  <h1>{response.id}</h1>
                  </div>
              )
          }
      })}
  </div>

    )
}