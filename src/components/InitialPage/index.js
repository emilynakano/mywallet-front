import { Container } from "./style"
import { useNavigate } from "react-router-dom"
import UserContext from "../../contexts/UserContext"
import { useContext, useEffect, useState, React } from "react"
import axios from "axios"

export default function InitialPage () {
    const {user} = useContext(UserContext);
    const [registration, setRegistration] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const promise = axios.get("http://localhost:5000/post", config);
        promise.then(res => setRegistration(res.data));
    }, )
    let sale = 0;

    for(let i = 0; i < registration.length; i ++) {
        if(registration[i].type === 'add') {
            sale = sale + Number(registration[i].value);
        } else {
            sale = sale - Number(registration[i].value);
        }
    }
    
    return (
        <Container>
            <header>
                <h2>Olá, {user.name}</h2>
                <ion-icon onClick={()=> navigate('/')} class="exit" name="exit-outline"></ion-icon>
            </header>
            <div className="withoutRegister escondido">
                <h3>Não há registros de entrada ou saída</h3>
            </div>
            <div className="withRegister">
                <div className="registers">
                    {registration.map((reg) => 
                    <div>
                        <h3 className="date">{reg.date}</h3>
                        <h3 className="description">{reg.description}</h3>
                        {reg.type === 'add' ? <h3 className="value add">{reg.value}</h3> : <h3 className="value exitr">{reg.value}</h3>}
                    </div>
                    )}
                </div>
                <div className="sale">
                    <h2>sale</h2>
                    {sale < 0 ? <h3 className="value exitr">{sale * -1}</h3> : <h3 className="value add">{sale}</h3>}
                    
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