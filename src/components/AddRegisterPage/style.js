import styled from 'styled-components'
const Container = styled.div `
    width:100%;
    display:flex;
    flex-direction:column;
    gap:50px;
    padding: 20px;
    form {
        width: 100%;
        display: flex;
        flex-direction:column;
        gap:10px;
    }
    input {
        height: 58px;
        border:none;
        border-radius: 5px;
        padding: 15px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

        color: #000000;
    }
    input::placeholder {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

        color: #000000;
  
    }
    button {
        text-align:center;
        height: 48px;
        background-color: #A328D6;
        border:none;
        border-radius:5px;
        &:hover{
            cursor: pointer;
        }
    }
    span {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
    }
`
export {Container}