import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { Search } from "src/assets/icons";
import * as S from "./styles";

const Filter = () => {
  return (
    <S.Container>
      <S.Content>
        <h2>O que voce procura?</h2>
        <div>
          <input type="radio" />
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
        <Form.Select aria-label="Default select example">
          <option>Marca</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Select aria-label="Default select example">
          <option>Modelo</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <div>
          <Form.Select aria-label="Default select example">
            <option>Ano de</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select aria-label="Default select example">
            <option>Ano até</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        <div>
          <Form.Select aria-label="Default select example">
            <option>Valor de</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select aria-label="Default select example">
            <option>Valor até</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        <Button variant="primary">
          <Search />
          BUSCAR OFERTAS AGORA
        </Button>
      </S.Content>
    </S.Container>
  );
};

export default Filter;
