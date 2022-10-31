import styled from "styled-components";
import { color } from "src/shared/utils/styles";

export const Container = styled.div`
  margin-top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* margin: 10px; */
  img {
    max-width: 150px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  i {
    color: ${color.icon};
    font-size: 16px !important;
  }
  #icon-lock {
    color: white;
  }
  #highlight {
    color: ${color.icon};
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-right: 20px;
`;
