import { Container } from './style'
import { useContext, useState, React } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import UserContext from '../../contexts/UserContext'

export default function LoginPage() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({
        email:'',
        password:''
    });
    function Login (e) {
        e.preventDefault();
        const promise = axios.post("http://localhost:5000/sign-in", {...userLogin});
        promise
        .then((res) => {
            setUser(res.data);
            navigate('/home')
        })
        .catch(() => {
            alert("preencha os campos corretamente!")
        })
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