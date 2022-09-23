import React,{useState} from 'react';
import '../App.css';
import Home from './Home';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Container } from '@mui/system';

const About = (props) => {
  const[data,setData] = useState({
    username : "",
    password :""
  })
  const {username, password} = data;
  const changeHandler = e =>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  return (
    <div className='subbmit-form'>
      <center>
        <h1>Simple Submit form </h1>
      <form>
            <input type ="text" name='username' value={username} onChange={changeHandler}  placeholder="username"/> <br/><br></br>
            <input type ="password" name='password' value={password} onChange={changeHandler} placeholder="password" /><br/><br></br>
            <input type="submit" name='submit'placeholder='submit' onClick={()=>{props.onSubmit("Home")}} />
          </form>
      </center>
    </div>
  )
}

export default About