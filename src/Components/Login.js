import { Avatar, FormControlLabel, Grid, Paper, TextField, Link, Typography, Box } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';
import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { deepPurple } from '@mui/material/colors';


const Login = () => {
  const preventDefault = (event) => event.preventDefault();
  return (
    <div className='loginBackgroundColor'>
    <Grid >
      <Paper className='PaperStyle' elevation={10}>
    <Grid align="center">
    <Avatar sx={{ bgcolor: deepPurple[500] }}><LockOutlinedIcon /></Avatar>
    <br></br>
        <h5>LOGIN</h5>
    </Grid >
    
   <TextField className='TextFieldStyle' label="UserName" placeholder='Enter UserName' type="email" variant="standard" fullWidth required /> <br/> <br/>
   <TextField className='TextFieldStyle' label="Password" placeholder='Enter Password' type="password" variant="standard" fullWidth required /> <br/> <br/>
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
      {/* <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
    </FormGroup>
    <br/>
    <Button className='TextFieldStyle' variant="contained" fullWidth>login</Button>
    <br/><br/>
    <Typography>
    <Box
      sx={{
        typography: 'body1','& > :not(style) + :not(style)': {ml: 2,},}}onClick={preventDefault}>
    <Link
      component="button" variant="body2"onClick={() => {console.info("I'm a button.");}}> Forget Password ?
    </Link>
    <Link href="#">Register</Link>  
    </Box>
    </Typography>
    </Paper>
    </Grid>
    </div>
  )
}

export default Login