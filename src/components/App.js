import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import InitialPage from './InitialPage'
import AddRegisterPage from './AddRegisterPage'
import ExitRegisterPage from './ExitRegisterPage'

import { useState } from 'react'
import UserContext from '../contexts/UserContext'

export default function App() {
    const [user, setUser] = useState('');
    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>} />
                    <Route path="/register" element={<RegisterPage/>} />
                    <Route path="/home" element={<InitialPage/>} />
                    <Route path="/add" element={<AddRegisterPage/>} />
                    <Route path="/exit" element={<ExitRegisterPage/>} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}