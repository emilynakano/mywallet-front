import { Container } from "./style"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function AddRegisterPage () {
    const navigate = useNavigate()
    const [entrada, setEntrada] = useState({
        value: '',
        descrition: ''
    })
    function ChangeInput (e) {
        setEntrada({...entrada, [e.target.name]: e.target.value})
    }
    function Save(e) {
        e.preventDefault();
        navigate('/home')
    }
    return (
        <Container>
            <h2>Nova entrada</h2>
            <form >
                <input type="number" placeholder="Valor" name="value" value={entrada.value} onChange={ChangeInput}/>
                <input type="text" placeholder="Descrição" name="descrition" value={entrada.descrition} onChange={ChangeInput}/>
                <button onClick={Save} type="submit">
                    <span>Salvar entrada</span>
                </button>
            </form>
        </Container>
    )
}