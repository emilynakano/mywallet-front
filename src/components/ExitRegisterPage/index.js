import {Container} from '../AddRegisterPage/style'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function RemoveRegisterPage () {
    const navigate = useNavigate()
    const [exit, setExit] = useState({
        value:'',
        description: ''
    })
    function ChangeInput (e) {
        setExit({...exit, [e.target.name]: e.target.value})
    }
    function Save(e) {
        e.preventDefault();
        navigate('/home')
    }
    return (
        <Container>
            <h2>Nova saída</h2>
            <form >
                <input type="number" placeholder="Valor" name="value" value={exit.value} onChange={ChangeInput}/>
                <input type="text" placeholder="Descrição" name='description' value={exit.description} onChange={ChangeInput}/>
                <button type='submit' onClick={Save}>
                    <span>Salvar saída</span>
                </button>
            </form>
        </Container>
    )
}