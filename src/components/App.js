import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RegisterPage/>} />
            </Routes>
        </BrowserRouter>
    )
}