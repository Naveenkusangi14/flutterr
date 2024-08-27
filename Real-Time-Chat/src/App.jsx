
import Login from './Pages/Login'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Home from './Pages/Home'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
