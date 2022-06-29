import { Container } from "./style"
import { useNavigate } from "react-router-dom"
export default function InitialPage () {
    const navigate = useNavigate()
    return (
        <Container>
            <header>
                <h2>Olá, Fulano</h2>
                <ion-icon onClick={()=> navigate('/')} class="exit" name="exit-outline"></ion-icon>
            </header>
            <div className="register">
                <h3>Não há registros de entrada ou saída</h3>
            </div>
            <div className="buttons">
                <button onClick={()=> navigate('/add')}>
                    <ion-icon class="ion-add" name="add-circle-outline"></ion-icon>
                    <h3>Nova entrada</h3>
                </button>
                <button onClick={()=> navigate('/exit')}>
                <ion-icon class='ion-remove' name="remove-circle-outline"></ion-icon>
                    <h3>Nova saída</h3>
                </button>
            </div>
            
        </Container>
    )
}