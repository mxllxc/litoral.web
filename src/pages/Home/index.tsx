import Header from "src/components/Header";
import Filter from "./Filter";
import * as S from "./styles";

const Home: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <Filter />
    </S.Container>
  );
};

export default Home;
