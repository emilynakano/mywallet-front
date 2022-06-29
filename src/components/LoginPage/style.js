import styled from 'styled-components'
const Container = styled.div `
    height: 100vh;

    align-items: center;
    justify-content: center;
    gap: 50px;

    display: flex;
    flex-direction: column;
    span {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 23px;
        color: #ffffff;
        &:hover{
            cursor: pointer;
        }
    }
    form {
        width: 100%;

        align-items: center;
        gap: 13px;

        display: flex;
        flex-direction: column;
        button, input {
            width: 326px;
            height:58px;
            padding: 18px;
            border: none;
            border-radius: 2px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
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
            background-color: #A328D6;
            font-size: 10px;
            span {
                font-size:20px;
            }
            &:hover{
                cursor: pointer;
            }
        }
        
    }
`;
export {Container};