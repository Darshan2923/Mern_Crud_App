import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Addtask from './components/Addtask'
import Updatetask from './components/Updatetask'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/create' element={<Addtask />} />
        <Route path='/updateTask/:id' element={<Updatetask />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
