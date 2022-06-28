import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import LoginPage from './LoginPage'
//import RegisterPage from './RegisterPage'
import InitialPage from './InitialPage'
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<InitialPage/>} />
            </Routes>
        </BrowserRouter>
    )
}