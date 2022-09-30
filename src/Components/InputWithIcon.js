
import React, { useEffect, useState } from 'react'
import axios from 'axios';


const InputWithIcon = () => {
  const[data, setData] = useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/albums").then(response=>setData(response.data))
  },[])
  return (
    <>
    <center>
      <h1>api request using axios</h1>
    {
      data.map(item=><li key={item.id}>{item.title}</li>)
    }
    </center>
    </>
  )
}

export default InputWithIcon