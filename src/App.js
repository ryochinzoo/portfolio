import './App.css'
import Home from './pages/home'
import Portfolio from './components/layouts/portfolio'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    document.title = "Ryohei Hara"
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/:work" element={<Portfolio />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
