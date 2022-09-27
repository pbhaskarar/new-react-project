import { Avatar, FormControlLabel, Grid, Paper, TextField, Link, Typography, Box } from '@mui/material';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import Button from '@mui/material/Button';
import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { green } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const Register = () => {
  const preventDefault = (event) => event.preventDefault();
  return (
    <div className='loginBackgroundColor'>
    <Grid >
      <Paper className='PaperStyle' elevation={10}>
    <Grid align="center">
    <Avatar sx={{ bgcolor: green[500] }}><Person4OutlinedIcon /></Avatar>
    <br></br>
        <h5 className='resi-style'>REGISTER</h5>
    </Grid >
    <form>
    <TextField className='TextFieldStyle' label="Name" placeholder='Enter Name' type="name" variant="standard" fullWidth required /> <br/>
    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" /><br></br>
        </RadioGroup>

    <TextField className='TextFieldStyle' label="UserName Email" placeholder='Enter UserName or Email' type="email" variant="standard" fullWidth required /> <br/>
    <TextField className='TextFieldStyle' label="Password" placeholder='Enter Password' type="password" variant="standard" fullWidth required /> <br/> 
   <TextField className='TextFieldStyle' label="Confirm Password" placeholder='Confirm Password' type="password" variant="standard" fullWidth required /> <br/> 
   <TextField className='TextFieldStyle' label="Mobile Number" placeholder='Enter Mobile Number' type="number" variant="standard" fullWidth required /> <br/> 
    
    </form>
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
    </FormGroup>
    <Button className='TextFieldStyle' variant="contained" color="success" fullWidth>Register</Button>
    <br/>
    <Typography>
    <Box
      sx={{
        typography: 'body1','& > :not(style) + :not(style)': {ml: 2,},}}onClick={preventDefault}>
    <Link
      component="button" variant="body2"onClick={() => {console.info("I'm a button.");}}> Already Account ?
    </Link>
    <Link href="#">Login</Link> 
    
    </Box>
    </Typography>
    </Paper>
    </Grid>
    </div>
  )
}

export default Register;