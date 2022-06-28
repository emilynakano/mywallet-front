import {Container} from '../AddRegisterPage/style'
export default function RemoveRegisterPage () {
    return (
        <Container>
            <h2>Nova saída</h2>
            <form >
                <input type="number" placeholder="Valor"/>
                <input type="text" placeholder="Descrição"/>
                <button>
                    <span>Salvar saída</span>
                </button>
            </form>
        </Container>
    )
}