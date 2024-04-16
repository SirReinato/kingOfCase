import styled from 'styled-components';
import { useCarrinhoContext } from '../../../hooks/useCarrinhoContext';
import { useState } from 'react';

const Contador = ({ id }) => {
  const { aumentarValor, diminuiValor } = useCarrinhoContext()
  const [numero, setNumero] = useState(1);

  const aumentarNumero = () => {
    setNumero(numero + 1)
    aumentarValor(id, numero);

  };

  const diminuirNumero = () => {
    if (numero > 1) {
      console.log(numero);
      setNumero(numero - 1)
      diminuiValor(id)
    }
  };

  return (
    <ContadorStl>
      <BtnMenos onClick={diminuirNumero}>-</BtnMenos>
      <Numero>{numero}</Numero>
      <BtnMais onClick={aumentarNumero}>+</BtnMais>
    </ContadorStl>
  );
};

const ContadorStl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BtnMenos = styled.button`
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 16px;
  padding: 0 8px;
  cursor: pointer;
  background-color: #4A1F5C;
  color: #9CCFC8;
`;

const Numero = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #270622;
`;

const BtnMais = styled.button`
  font-size: 1rem;
  font-weight: bold;
  padding: 0 4px;
  border: none;
  border-radius: 16px;

  background-color: #4A1F5C;
  color: #9CCFC8;
  cursor: pointer;
`;

export default Contador;
