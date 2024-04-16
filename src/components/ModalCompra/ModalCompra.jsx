
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import { useCarrinhoContext } from '../../hooks/useCarrinhoContext';
import { Lista, ListaCompraCardStl } from '../../pages/PaginaDeCompra/PaginaDeCompra';
import useClipboard from "react-use-clipboard";
import { BtnPadraoStl } from '../BrnPadrao/BrnPadrao';

const ModalCompra = ({ show, handleClose, nome, email, Logradouro, Cidade, Estado, Bairro, complemento, tel }) => {
	const { carrinho, setCarrinho } = useCarrinhoContext()
	const [isCopied, setIsCopied] = useClipboard('080fb85e-d317-4e85-9dce-bccb9a3959b8', {
		successDuration: 1000,
	});

	function finalizarCompra() {
		setCarrinho([])
		handleClose
	}
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Resumo da Compra</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<ModalCompraStl>
					<ModalLiStl>
						{nome} - {email} - {tel}
					</ModalLiStl>
					<ModalLiStl>
						{Logradouro} - {Bairro} - {Cidade} - {Estado} - {complemento}
					</ModalLiStl>
					{carrinho.map(dados => {
						return (
							<ListaCompraCardStl>
								<Lista key={dados.id}>
									{`${dados.valor / dados.valorSoma} - ${dados.nome}`}
									<span>{`R$ ${dados.valor},00`}</span>
								</Lista>
							</ListaCompraCardStl>
						)
					})}
					<Acompra> Pix: <span className='chave' onClick={setIsCopied}>cópiar a chave <p className='copiado'>{isCopied ? "Copiado! 👍" : ""}</p> </span> </Acompra>
				</ModalCompraStl>
			</Modal.Body>

			<Modal.Footer>
				<BtnPadraoStl
					borderbottom='#000'
					color="#000"
					onClick={finalizarCompra}
				>Finalizar</BtnPadraoStl>
			</Modal.Footer>
		</Modal>
	);
};

const ModalCompraStl = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 8px;
`;

const ModalLiStl = styled.li`
	width: 100%;
	display: flex;
	gap: 30%;
`
const Acompra = styled.h3`
	font-size: 1.2rem;
	letter-spacing: .1em;
	.chave{
		font-size: 1rem;
		text-decoration: underline;
		color: blue;

		.copiado{
			text-decoration: none;
			background-color: blue;
			border-radius: 10px;
			color: aliceblue;
			width: 70%;

		}
	}
`
export default ModalCompra;