import { Contador as ContadorDictionary } from "../utils/dictionary";

//================================================
// Envios para o back end

export type Filtro = {
  categoria: string;
  marca: string;
  modelo: string;
  nome: string;
  ano: number;
  valor: number;
  loja: number;
};

//================================================
// Retornos do back end

//================================================
// Helpers
export type Contador = {
  [ContadorDictionary.CONTADOR]: number;
};

//================================================
// State

export type RootState = {
  contadorState: ContadorState;
};

export type ContadorState = {
  contador: Contador;
};
