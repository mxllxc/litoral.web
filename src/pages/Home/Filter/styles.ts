import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { color } from "src/shared/utils/styles";

type Props = {
  filterSelect: boolean;
};
export const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 20px;
  align-items: center;
  margin: 20vh 20vw;
  border-radius: 0 10px 10px 10px;
  position: relative;
`;

export const HeaderFilter = styled.div<Props>`
  position: absolute;
  top: -50px;
  display: flex;
  flex-direction: row;
  background-color: white;
  left: 0;
  border-radius: 10px 10px 0 0;
  > div {
    cursor: pointer;
    gap: 20px;
    :first-child {
      background-color: ${(props) =>
        props.filterSelect ? "white" : color.lighGray};
      border-radius: 10px 0 0 0;
    }
    border-radius: 0 10px 0 0;
    padding: 10px 15px;
    background-color: ${(props) =>
      props.filterSelect ? color.lighGray : "white"};
    width: 100%;
    height: 100%;
  }

  h2 {
    cursor: pointer;
    font-family: sans-serif;
    font-size: 0.85rem;
    line-height: 10px;
    color: gray;
  }
`;

export const Content = styled(Form)`
  width: 100%;
  padding: 30px;
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
  .second-filter {
    margin-bottom: -20px;
  }
  .grid-none {
    grid-column: 1 / 3;
    height: 100%;
  }
  .search {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 5px;
    font-weight: bold;
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
    padding: 10px 15px;
    outline: none;
    border: none;
    background-image: none;
    border-radius: 10px;
    grid-column: 1 / 3;
    height: 100%;
  }
`;
