import styled from 'styled-components';
import Contador from '../Contador/Contador';
import { useState } from 'react';

const CardCarrinho = ({ path, nome, valorOriginal, valor,modelo,personalizacao, id }) => {

	return (
		<CardCarrinhoStl>
			<img className='fotoCapinha' src={path} alt={nome} />
			<FigcaptionStl>
				<h2 className='tituloNome'>{nome}</h2>
				<p className='tipo'>{modelo}</p>
				<p className='tipo'>{personalizacao}</p>
				<span>
					<p className='falso'>{`R$ ${valorOriginal},00`}</p>
					<p className='verdadeiro'>{`R$ ${valor},00`}</p>
				</span>
				<Contador id={id}/>
			</FigcaptionStl>
		</CardCarrinhoStl>
	);
};

const CardCarrinhoStl = styled.figure`
	width: 80%;
	height: 150px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 16px;
	padding: 8px;
	background: #77B1A9;

	.fotoCapinha{
		width: 25%;
		height: 90%;
	}
`;

const FigcaptionStl = styled.figcaption`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	.tituloNome{
		font-size: 1rem;
		font-family: "Inknut Antiqua", serif;
		font-weight: bold;
		color: #4A1F5C;
	}
	.tipo{
		font-size: .8rem;
		font-family: "Inknut Antiqua", serif;
		color: #4A1F5C;	
	}
	span{
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 16px;
		font-family: "Inknut Antiqua", serif;
		color: #4A1F5C;
		.falso{
			font-size: .6rem;
			text-decoration: line-through;
		}
		.verdadeiro{
			font-size: 1rem;

		}
	}
`

export default CardCarrinho;