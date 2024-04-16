import styled from 'styled-components';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BtnPadraoStl } from '../BrnPadrao/BrnPadrao';
import CardCarrinho from './CardCarrinho/CardCarrinho';
import { Link } from 'react-router-dom';
import { ValorTotal } from '../../pages/PaginaDeCompra/PaginaDeCompra';
import { useCarrinhoContext } from '../../hooks/useCarrinhoContext';

const CarrinhoCompras = ({ show, handleClose }) => {
	const { carrinho } = useCarrinhoContext()
	

	return (
		<Offcanvas show={show} onHide={handleClose} placement="end">
			<CarrinhoComprasStl>

				<Offcanvas.Header closeButton>
					<Offcanvas.Title className='titulo'>Sacola de compras</Offcanvas.Title>
				</Offcanvas.Header>

				<Offcanvas.Body className='corpo'>
					{carrinho.map(dados => {
						return (
							<CardCarrinho 
								key={dados.nome} 
								{...dados} 
								 />)
					})}

					<ValorTotal>
						Valor Total:
						<span>
							{`R$ ${carrinho.reduce((soma, cur) => soma + parseInt(cur.valor), 0)},00`}
						</span>
					</ValorTotal>

					<Link to={'comprar'}>
						<BtnPadraoStl
							onClick={handleClose}
							backgroun="#4A1F5C"
							borderbottom="#4A1F5C"
							color="#9CCFC8">
							Comprar
						</BtnPadraoStl>
					</Link>
				</Offcanvas.Body>
			</CarrinhoComprasStl>
		</Offcanvas>
	);
};

const CarrinhoComprasStl = styled.div`
	height: 100%;
	overflow-y: auto;
	background-color: #9CCFC8;
	.titulo{
		font-size: 1.8rem;
		font-family: "Inknut Antiqua", serif;
	}
	.corpo{
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
	}
`;


export default CarrinhoCompras;