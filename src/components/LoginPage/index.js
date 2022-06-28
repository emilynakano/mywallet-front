import { Container } from './style'
export default function LoginPage() {
    return (
        <Container>
            <h1>My Wallet</h1>
            <form>
                <input type='email' placeholder='Email' name='email'/>
                <input type='password' placeholder='Senha'/>
                <button type={'submit'} >
                    <span>Entrar</span>
                </button>
            </form>
         
            <span>Primeira vez? Cadastre-se!</span>
            
        </Container>
    )
}