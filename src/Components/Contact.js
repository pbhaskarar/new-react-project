import React,{useState} from 'react'

const Contact = (props) => {
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
    if(username.length <=5){
     alert("username must be 5 characters")
    }
    else if(password !== confirmPassword){
    alert("password are not matching")
    }
  }

  return (
    
    <div className='subbmit-form'>
    <center>
      <h1>contact form validation </h1>
      <form onSubmit={submitHandler}>
      <input type="text" name='username' value={username} placeholder="username" onChange={changeHandler}/><br></br> <br></br>
      <input type="email" name='email' value={email}  placeholder="email" onChange={changeHandler}/><br></br><br></br>
      <input type="password" name='password' value={password} placeholder="password" onChange={changeHandler}/><br></br><br></br>
      <input type="passwoed" name='confirmPassword' value={confirmPassword} placeholder="password" onChange={changeHandler} /><br></br><br></br>
      <input type="submit" name='submit' placeholder='submit' />
      </form>
    </center>  
    </div>
  )
}

export default Contact