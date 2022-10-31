import * as S from "./styles";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";

type Props = {
  title: string;
  itens: any[];
};

const CustomDropdown = (props: Props) => {
  return (
    <S.MyDropdown>
      <NavDropdown
        title={
          <span>
            {props.title}
            <i className="icon-angle-down icon-3x" />
          </span>
        }
      >
        {props.itens.map((iten, index) => (
          <Dropdown.Item key={index} href={iten.ref}>{iten.name}</Dropdown.Item>
        ))}
      </NavDropdown>
    </S.MyDropdown>
  );
};

export default CustomDropdown;
