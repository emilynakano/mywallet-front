import { Container } from "../LoginPage/style"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        checkPassword: ''
    });
    function ChangeInput(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    function Login (e) {
        e.preventDefault()
        navigate('/')
    }
    return (
        <Container>
            <h1>My Wallet</h1>
            <form >
                <input type="text" placeholder="Nome" name="name" value={user.name} onChange={ChangeInput}/>
                <input type="email" placeholder="Email" name="email" value={user.email} onChange={ChangeInput}/>
                <input type="password" placeholder="Senha" name="password" value={user.password} onChange={ChangeInput}/>
                <input type="password" placeholder="Confirme a senha" name="checkPassword" value={user.checkPassword} onChange={ChangeInput}/>
                <button onClick={Login} type="submit">
                    <span>Cadastrar</span>
                </button>
            </form>
            <span onClick={() => navigate('/')}>Já tem uma conta? Entre agora! </span>
            
        </Container>
    )
}