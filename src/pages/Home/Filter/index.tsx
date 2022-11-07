import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { color } from "src/shared/utils/styles";
import * as S from "./styles";

const Filter = () => {
  return (
    <S.Container>
      <S.Content>
        <h2>O que voce procura?</h2>
        <div>
          <input type="radio" checked />
          <h4>Carro</h4>
          <input type="radio" />
          <h4>Moto</h4>
          <input type="radio" />
          <h4>Caminhão</h4>
          <DropdownButton
            key="end"
            id="dropdown-button-drop-end"
            drop="end"
            variant="primary"
            title="Outros"
          >
            <Dropdown.Item eventKey="1">
              <span>
                <input type="radio" />
                Carreta
              </span>
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">
              <span>
                <input type="radio" />
                Implemento rod.
              </span>
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">
              <span>
                <input type="radio" />
                Motor home
              </span>
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">
              <span>
                <input type="radio" />
                Ônibus
              </span>
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">
              <span>
                <input type="radio" />
                Patinete
              </span>
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">
              <span>
                <input type="radio" />
                Quadriciculo/triciculo
              </span>
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">
              <span>
                <input type="radio" />
                Trator/maquinas
              </span>
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </S.Content>
    </S.Container>
  );
};

export default Filter;
