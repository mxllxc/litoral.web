import * as S from "./styles";
const LitoralCar = require("src/assets/images/litoralcar.png");

const Header = () => {
  return (
    <S.Container>
      <img src={LitoralCar} alt="LitoralCar" />
    </S.Container>
  );
};

export default Header;
