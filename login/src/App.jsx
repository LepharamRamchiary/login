import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/login";
import Signup from "./pages/signup"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Signup />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
