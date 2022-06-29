import { Container } from './style'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function LoginPage() {
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({
        email:'',
        password:''
    });
    function Login (e) {
        e.preventDefault();
        navigate('/home')
    }
    function ChangeInput (e) {
        setUserLogin({...userLogin, [e.target.name]: e.target.value})
    }
    return (
        <Container>
            <h1>My Wallet</h1>
            <form>
                <input type='email' placeholder='Email' name='email' value={userLogin.email} onChange={ChangeInput}/>
                <input type='password' placeholder='Senha' name='password' value={userLogin.password} onChange={ChangeInput}/>
                <button onClick={Login} type={'submit'} >
                    <span>Entrar</span>
                </button>
            </form>
         
            <span onClick={() => navigate('/register')}>Primeira vez? Cadastre-se!</span>
            
        </Container>
    )
}