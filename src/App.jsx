import React from 'react'
import './App.css'
import Chatbox from './components/Chatbox'
import LoginPage from './pages/LoginPage'
import UserPage from './pages/UserPage'
import Message from './components/Message'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chat" element={<Chatbox />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </Router>
  )
}

export default App