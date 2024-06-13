import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/login";
import Signup from "./pages/signup"
import Home from "./pages/home"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
