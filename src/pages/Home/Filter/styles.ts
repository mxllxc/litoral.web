import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { color } from "src/shared/utils/styles";

export const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 20px;
  align-items: center;
  margin: 20vh 20vw;
  border-radius: 10px;
`;

export const Content = styled(Form)`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  :last-child {
    grid-column: 1 / 2;
  }
  input {
    margin-right: 10px;
    margin-top: -5px;
  }
  > div {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    :nth-child(5) {
      margin-top: 0;
    }
    :nth-child(6) {
      margin-top: 0;
    }

    > input {
      margin-left: 20px;
      margin-right: 10px;
    }

    h4 {
      margin-top: 7px;
      color: ${color.text};
    }

    button {
      margin-left: 20px;
      padding: 6px 15px;
      border: none;
      outline: none;
      background-image: none;
      border-radius: 10px;
    }

    select {
      :nth-child(2) {
        margin-left: 15px;
      }
    }
  }
  select {
    margin-top: 10px;
    height: 100%;
    background-color: #f5f7fc;
    border: none;
    color: ${color.text};
    font-size: small;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    border-radius: 10px;
  }
  button {
    :nth-child(7) {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 5px;
      font-weight: bold;
    }
    padding: 10px 15px;
    outline: none;
    border: none;
    background-image: none;
    border-radius: 10px;
    grid-column: 1 / 3;
    height: 100%;
  }
`;
