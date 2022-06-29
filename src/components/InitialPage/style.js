import styled from "styled-components";
const Container = styled.div `
    display: flex;
    flex-direction: column;

    align-items: center;

    height: 100vh;
    padding: 25px;
    gap: 22px;
    h3 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;

        color: #868686;
    }
    header {
        width: 100%;
        display:flex;
        align-items: center;
        justify-content: space-between;
    }
   
    .exit {
        color: #FFFFFF !important;
        font-size: 22px !important;
        &:hover{
            cursor: pointer;
        }
    }
    .withoutRegister {
        background-color: white;
        width:100%;
        height:60vh;
        display:flex;
        justify-content:center;
        align-items:center;
        padding: 0 10vh;
        text-align:center;
        border-radius:5px;
    }
    .withRegister {
        padding: 2vh;
        padding-bottom:0;
        background-color: white;
        width:100%;
        height:60vh;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        .registers {
            div{
                display:flex;
                justify-content:space-between;
            }
        }
        h3 {
            font-size: 16px;
        }
        .description {
            color: #000000;
        }
        .value.exitr {
            color: #C70000;
        }
        .value.add {
            color: #03AC00;
        }
        .saldo {
            display:flex;
            justify-content:space-between;
            h2 {
                font-weight: 700;
                color: #000000;
                font-size: 17px;
            }
        }
        
    }
    .buttons {
        width:100%;
        display: flex;
        gap: 20px;
        button {
            padding:10px;
            width:60%;
            height: 114px;
            background-color:#A328D6;
            border:none;
            border-radius:5px;
            display:flex;
            flex-direction:column;
            justify-content: space-between;
            &:hover{
                cursor: pointer;
            }
        }
        h3 {
            color: #FFFFFF;
            font-weight: 700;
            font-size: 17px;
            width:30px;
        }
        .ion-add, .ion-remove {
            color: white !important;
            font-size: 22px !important;
        }

    }
    .escondido {
        display: none;
    }
    
`
export {Container}