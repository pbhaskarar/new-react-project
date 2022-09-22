import React, { useState } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import InputWithIcon from './Components/InputWithIcon'

const App = () => {
  const[form, setForm] = useState("about");
  console.log(form)
  return (
    <div>
     {
       form === "about" ? <About onSubmit={setForm}/> : null
     }
     {
       form === "Home" ? <Home />: null
     }
    </div>
  )
}

export default App