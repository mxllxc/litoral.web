import styled from "styled-components";
import Form from 'react-bootstrap/Form';

export const Container = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20vh 20vw;
    border-radius: 10px;
`

export const Content = styled(Form)`
    display: flex;
    flex-direction: column;

    section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`