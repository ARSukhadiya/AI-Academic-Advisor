import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LogIn } from '../src/pages/Login.tsx';
import { Dashboard } from '../src/pages/Dashboard.tsx';
import { Profile } from '../src/pages/Profile.tsx';
import { Header } from './components/Header.tsx';
import { SignUp } from '../src/pages/Signup.tsx';
import { Chat } from '../src/pages/Chat.tsx';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
