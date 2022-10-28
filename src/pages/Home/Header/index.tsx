import * as S from "./styles";
const LitoralCar = require("src/assets/images/litoralcar.png");

const Header = () => {
  return (
    <S.Container>
      <img src={LitoralCar} alt="LitoralCar" />
      <S.ContainerInfo>
        <S.Content>
          <h3>Comprar</h3>
          <i className="icon-angle-down icon-3x" />
        </S.Content>
        <S.Content>
          <h3>Vender</h3>
          <i className="icon-angle-down icon-3x" />
        </S.Content>
        <S.Content>
          <h3>Utilidades</h3>
          <i className="icon-angle-down icon-3x" />
        </S.Content>
        <S.Content>
          <h3>Serviços</h3>
        </S.Content>
        <S.Content>
          <h3>Blog</h3>
        </S.Content>
        <S.Content>
          <i id="icon-lock" className="icon-lock icon-3x" />
          <h3>Área do lojista</h3>
        </S.Content>
        <S.Content>
          <h3 id="highlight">Anuncie aqui</h3>
        </S.Content>
      </S.ContainerInfo>
    </S.Container>
  );
};

export default Header;
