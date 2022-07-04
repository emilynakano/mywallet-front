import {Container} from '../AddRegisterPage/style'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../../contexts/UserContext'
import axios from 'axios'
import * as Loader from 'react-loader-spinner'

export default function RemoveRegisterPage () {
    const [loading, setLoading] = useState(false)
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
    const [output, setOutput] = useState({
        value:'',
        description: ''
    })
    function ChangeInput (e) {
        setOutput({...output, [e.target.name]: e.target.value})
    }
    function HandleSubmit(e) {
        e.preventDefault();
        setLoading(true)
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const promise = axios.post('https://projeto-mywallett.herokuapp.com/post', {...output, type: 'exit'}, config);
        promise.then(() => navigate('/home'));
        promise.catch(() => {
            alert("preencha os dados corretamente")
            setLoading(false)
        })
    }
    return (
        <Container>
            <h2>Nova saída</h2>
            <form >
                <input type="number" placeholder="Valor" name="value" value={output.value} onChange={ChangeInput}/>
                <input type="text" placeholder="Descrição" name='description' value={output.description} onChange={ChangeInput}/>
                <button type='submit' onClick={HandleSubmit}>
                    {loading ? 
                        <div className="loader">
                            <Loader.ThreeDots
                                color="white"
                                height={70}
                                width={70}
                                timeout={3000}
                            />
                        </div>
                        :
                        <span>Salvar entrada</span>}
                </button>
            </form>
        </Container>
    )
}