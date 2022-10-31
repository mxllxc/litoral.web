import CustomDropdown from "../CustomDropdown";
import * as S from "./styles";
import  { redirect } from 'react-router-dom'

const LitoralCar = require("src/assets/images/litoralcar.png");

const Header = () => {
  return (
    <S.Container>
      <img src={LitoralCar} alt="LitoralCar" onClick={() => {redirect("/")}} />
      <S.ContainerInfo>
        <S.Content>
          <CustomDropdown
            title="Comprar"
            itens={[
              { ref: "carros", name: "Carros" },
              { ref: "motos", name: "Motos" },
              { ref: "busca", name: "Busca avançada" },
              { ref: "concessionarias", name: "Concessionárias" },
              { ref: "revendas", name: "Todas as revendas" },
              { ref: "ultimas-cadastrados", name: "Últimos cadastrados" },
              { ref: "oferta", name: "Veículos em ofertas" },
              { ref: "particular", name: "Veículos particulares" },
            ]}
          />
        </S.Content>
        <S.Content>
          <CustomDropdown
            title="Vender"
            itens={[
              { ref: "anuncie", name: "Anuncie seu veículo" },
              { ref: "meu-anuncio", name: "Acessar meu anúncio" },
              { ref: "avalie", name: "Avalie seu veículo" },
            ]}
          />
        </S.Content>
        <S.Content>
          <CustomDropdown
            title="Utilidades"
            itens={[
              { ref: "multa-ipva", name: "Multa e IPVA" },
              { ref: "fipe", name: "Tabela FIPE" },
              { ref: "combustivel", name: "Preço combustível" },
              { ref: "mapa", name: "Mapa do site" },
            ]}
          />
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
