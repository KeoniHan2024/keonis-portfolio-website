
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import './css/global.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
