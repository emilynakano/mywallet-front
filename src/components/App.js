import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import LoginPage from './LoginPage'
//import RegisterPage from './RegisterPage'
//import InitialPage from './InitialPage'
//import AddRegisterPage from './AddRegisterPage'
import RemoveRegisterPage from './RemoveRegisterPage'
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RemoveRegisterPage/>} />
            </Routes>
        </BrowserRouter>
    )
}