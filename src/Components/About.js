import React,{useState} from 'react';
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
    <div>
      <center>
      <form>
            <input type ="text" name='username' value={username} onChange={changeHandler} /> <br/>
            <input type ="password" name='password' value={password} onChange={changeHandler} /><br/>
            <input type="submit" name='submit' onClick={()=>{props.onSubmit("Home")}} />
          </form>
      </center>
    </div>
  )
}

export default About