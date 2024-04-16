import { useContext, useState } from "react";
import { CarrinhoContext } from "../CarrinhoContext/CarrinhoContext";

export function useCarrinhoContext() {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext)

  function addAoCarrinho(novoItem) {
    setCarrinho([...carrinho, novoItem])

  }

  function aumentarValor(id, numero) {
  
    const index = carrinho.findIndex(capinha => capinha.id === parseInt(id));
    const valorPorIndex = carrinho.find(capinha => capinha.id === parseInt(id));
    const valorSoma = valorPorIndex.valorSoma

    numero = numero + 1;
    if (index !== -1) {
      const novoCarrinho = [...carrinho];
      novoCarrinho[index].valor = valorSoma * numero;
      return setCarrinho(novoCarrinho)
    }

    return carrinho;

  }

  function diminuiValor(id) {
    const index = carrinho.findIndex(capinha => capinha.id === parseInt(id));
    const valorPorIndex = carrinho.find(capinha => capinha.id === parseInt(id));
    const valorSoma = valorPorIndex.valorSoma
    if (index !== -1) {
      const novoCarrinho = [...carrinho];
      novoCarrinho[index].valor = novoCarrinho[index].valor - valorSoma;
      return setCarrinho(novoCarrinho)
    }

    return carrinho;

  }

  return {
    carrinho,
    setCarrinho,
    aumentarValor,
    diminuiValor,
    addAoCarrinho
  }
}