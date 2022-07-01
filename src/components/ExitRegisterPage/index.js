import {Container} from '../AddRegisterPage/style'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../../contexts/UserContext'
import axios from 'axios'

export default function RemoveRegisterPage () {
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
    const [output, setOutput] = useState({
        value:'',
        description: ''
    })
    function ChangeInput (e) {
        setOutput({...output, [e.target.name]: e.target.value})
    }
    function HandleSubmit(e) {
        e.preventDefault();
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const promise = axios.post('http://localhost:5000/post', {...output, type: 'exit'}, config);
        promise.then(() => navigate('/home'));
    }
    return (
        <Container>
            <h2>Nova saída</h2>
            <form >
                <input type="number" placeholder="Valor" name="value" value={output.value} onChange={ChangeInput}/>
                <input type="text" placeholder="Descrição" name='description' value={output.description} onChange={ChangeInput}/>
                <button type='submit' onClick={HandleSubmit}>
                    <span>Salvar saída</span>
                </button>
            </form>
        </Container>
    )
}