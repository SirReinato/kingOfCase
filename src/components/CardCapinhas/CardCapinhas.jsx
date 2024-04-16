import styled from 'styled-components';
import { BtnPadraoStl } from '../BrnPadrao/BrnPadrao';
import { toast } from 'react-toastify';
import { useCarrinhoContext } from '../../hooks/useCarrinhoContext';

const CardCapinhas = ({ nome, valorOriginal, valor, path, id,valorSoma }) => {
	const { addAoCarrinho } = useCarrinhoContext()

	function aoClicarParaCarrinho(nome, path, valorOriginal, valor, id, valorSoma) {
		const novoItem = {
			nome: nome,
			path: path,
			valorOriginal: valorOriginal,
			valor: valor,
			id: id,
			valorSoma: valorSoma
		}
		const notify = toast("adicionado ao carrinho");
		addAoCarrinho(novoItem)

		return notify;
	}

	return (
		<CardCapinhasStl>
			<div className='conteinerFoto'>
				<img className='fotoCapinha' src={path} alt={nome} />
			</div>
			<TextosValores>
				<h3 className='tituloCard'>{nome}</h3>
				<span>
					<p className='precoFalso'>{`R$ ${valorOriginal},00`}</p>
					<p className="preco">{`R$ ${valor},00`}</p>
				</span>
			</TextosValores>
			<BtnPadraoStl
				onClick={() => aoClicarParaCarrinho(nome, path, valorOriginal, valor, id, valorSoma)}
				fontSize=".4rem"
				backgroun="#4A1F5C"
				borderbottom="#4A1F5C"
				color="#9CCFC8"
			>Comprar</BtnPadraoStl>

		</CardCapinhasStl>
	);
};

const CardCapinhasStl = styled.figure`
	width: 230px;
	height: 320px;
	display: flex;
	padding: 8px 0;
	border-radius: 16px;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	background: #9CCFC8;
	@media (min-width: 661px) and (max-width: 1024px) {
		width: 190px;
		height: 320px;
	}

	@media (max-width: 660px) {
		width: 124px;
		height: 210px;
	}
	@media (max-width: 419px) {
		width: 114px;
		height: 210px;
	}
	.conteinerFoto{
		width: 137px;
		height: 55%;
		display: flex;
		border-radius: 16px;
		flex-direction: column;
		align-items: center;
		padding: 8px;

		background: #D4F5E8;
		@media (max-width: 660px) {
			width: 100px;
		}
		.fotoCapinha{
			width: 110%;
			height: 100%;
		}
	}
	
`;

const TextosValores = styled.figcaption`
	width: 245px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 8px;
	gap: 16px;
	font-family: "Inknut Antiqua", serif;
	@media (max-width: 660px) {
		width: 100%;
		padding: 4px;
		gap: 6px;
	}
	.tituloCard{
		width: 100%;
		font-size: 1rem;
		text-align: center;
		line-height: 20px;
		letter-spacing: .1em;
		color: #270622;
		@media (max-width: 660px) {
			line-height: 16px;
			letter-spacing: .1em;
			font-size: .6rem;
		}
	}
	span{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 16px;
		@media (max-width: 660px) {
			gap: 6px;
		}
		.precoFalso{
			font-size: .6rem;
			text-decoration: line-through;
			letter-spacing: .1em;
			color: #270622;
			@media (max-width: 660px) {
				font-size: .4rem;
			}
		}
		.preco{
			font-weight: bold;
			font-size: .8rem;
			letter-spacing: .1em;
			color: #270622;
			@media (max-width: 660px) {
				font-size: .6rem;
			}
		}
	}

`

export default CardCapinhas;