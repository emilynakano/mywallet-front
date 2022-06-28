import { Container } from "./style"
export default function AddRegisterPage () {
    return (
        <Container>
            <h2>Nova entrada</h2>
            <form >
                <input type="number" placeholder="Valor"/>
                <input type="text" placeholder="Descrição"/>
                <button>
                    <span>Salvar entrada</span>
                </button>
            </form>
        </Container>
    )
}