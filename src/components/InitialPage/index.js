import { Container } from "./style"
export default function InitialPage () {
    return (
        <Container>
            <header>
                <h2>Olá, Fulano</h2>
                <ion-icon class="exit" name="exit-outline"></ion-icon>
            </header>
            <div className="register">
                <h3>Não há registros de entrada ou saída</h3>
            </div>
            <div className="buttons">
                <button>
                    <ion-icon class="ion-add" name="add-circle-outline"></ion-icon>
                    <h3>Nova entrada</h3>
                </button>
                <button>
                <ion-icon class='ion-remove' name="remove-circle-outline"></ion-icon>
                    <h3>Nova saída</h3>
                </button>
            </div>
            
        </Container>
    )
}