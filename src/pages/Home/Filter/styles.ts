import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { color } from "src/shared/utils/styles";

export const Container = styled.div`
  background-color: white;
  display: flex;
  padding: 20px;
  align-items: center;
  margin: 20vh 15vw;
  border-radius: 10px;
`;

export const Content = styled(Form)`
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  input {
    margin-right: 10px;
    margin-top: -5px;
  }
  > div {
    display: flex;
    flex-direction: row;
    margin-top: 40px;

    > input {
      :first-child {
        margin-left: 80%;
      }
      margin-left: 20px;
      margin-right: 10px;
    }

    h4 {
      margin-top: 7px;
    }

    button {
      margin-left: 20px;
      border: none;
      outline: none;
      background-color: ${color.blue};
    }
  }
`;
