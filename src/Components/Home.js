import React, { useState } from 'react'
import { Form } from 'react-bootstrap';

const Home = () => {
  const[ form,setForm] = useState({
    username : "",
    email : "",
    password : "",
    confirmPassword :"",
  })
  const{username,email,password,confirmPassword} = form;
  const changeHandler = e =>{
    FormData({...form,[e.target.name]:[e.target.value]})
  }
  const submitHandler = e=>{
    e.preventDefault();
    if(password===confirmPassword){
      console.log(form);
    }
    else{
      console.log("password not matched");
    }
  }

  return (
    <div>
    <center>
      <h1>Home</h1>
      <form onSubmit={submitHandler}>
      <input type="text" name='username' value={username} placeholder="username" onChange={changeHandler}/> <br></br>
      <input type="email" name='email' value={email}  placeholder="email" onChange={changeHandler}/><br></br>
      <input type="password" name='password' value={password} placeholder="password" onChange={changeHandler}/><br></br>
      <input type="passwoed" name='confirmPassword' value={confirmPassword} placeholder="password" onChange={changeHandler} /><br></br>
      <input type="submit" name='submit' placeholder='submit' />
      </form>
    </center>  
    </div>
  )
}

export default Home;