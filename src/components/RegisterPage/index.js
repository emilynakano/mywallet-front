import { Container } from "../LoginPage/style"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios';

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
    function Register (e) {
        e.preventDefault()
        const promise = axios.post("http://localhost:5000/sign-up", {...user});
        promise
        .then(() => {
            navigate('/')
        })
        .catch(() => {
            alert("preencha todos os campos corretamente!")
        })
    }
    return (
        <Container>
            <h1>My Wallet</h1>
            <form >
                <input type="text" placeholder="Nome" name="name" value={user.name} onChange={ChangeInput}/>
                <input type="email" placeholder="Email" name="email" value={user.email} onChange={ChangeInput}/>
                <input type="password" placeholder="Senha" name="password" value={user.password} onChange={ChangeInput}/>
                <input type="password" placeholder="Confirme a senha" name="checkPassword" value={user.checkPassword} onChange={ChangeInput}/>
                <button onClick={Register} type="submit">
                    <span>Cadastrar</span>
                </button>
            </form>
            <span onClick={() => navigate('/')}>Já tem uma conta? Entre agora! </span>
            
        </Container>
    )
}