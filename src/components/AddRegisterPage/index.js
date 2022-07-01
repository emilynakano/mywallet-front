import { Container } from "./style"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

import { useContext } from "react"
import UserContext from "../../contexts/UserContext"

export default function AddRegisterPage () {
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
    const [input, setInput] = useState({
        value: '',
        description: ''
    })
    function ChangeInput (e) {
        setInput({...input, [e.target.name]: e.target.value})
    }
    function HandleSubmit(e) {
        e.preventDefault();
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const promise = axios.post('http://localhost:5000/post', {...input, type: 'add'}, config);
        promise.then(() => navigate('/home'));
    }
    return (
        <Container>
            <h2>Nova entrada</h2>
            <form >
                <input type="number" placeholder="Valor" name="value" value={input.value} onChange={ChangeInput}/>
                <input type="text" placeholder="Descrição" name="description" value={input.description} onChange={ChangeInput}/>
                <button onClick={HandleSubmit}>
                    <span>Salvar entrada</span>
                </button>
            </form>
        </Container>
    )
}