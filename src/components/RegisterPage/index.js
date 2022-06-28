import { Container } from "../LoginPage/style"

export default function RegisterPage() {
    return (
        <Container>
            <h1>My Wallet</h1>
            <form >
                <input type="text" placeholder="Nome"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <input type="password" placeholder="Confirme a senha"/>
                <button type="submit">
                    <span>Cadastrar</span>
                </button>
            </form>
            <span>Já tem uma conta? Entre agora! </span>
            
        </Container>
    )
}