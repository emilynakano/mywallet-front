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
            <div className="withoutRegister escondido">
                <h3>Não há registros de entrada ou saída</h3>
            </div>
            <div className="withRegister">
                <div className="registers">
                    <div>
                        <h3 className="date">30/11</h3>
                        <h3 className="description">almoco com a mae</h3>
                        <h3 className="value add">39,90</h3>
                    </div>
                    <div>
                        <h3 className="date">30/11</h3>
                        <h3 className="description">alamoco com a mae</h3>
                        <h3 className="value exitr">54,90</h3>
                    </div>
                </div>
                <div className="saldo">
                    <h2>SALDO</h2>
                    <h3 className="value exitr">54,90</h3>
                </div>
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