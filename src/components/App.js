import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import InitialPage from './InitialPage'
import AddRegisterPage from './AddRegisterPage'
import ExitRegisterPage from './ExitRegisterPage'
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/home" element={<InitialPage/>} />
                <Route path="/add" element={<AddRegisterPage/>} />
                <Route path="/exit" element={<ExitRegisterPage/>} />
            </Routes>
        </BrowserRouter>
    )
}