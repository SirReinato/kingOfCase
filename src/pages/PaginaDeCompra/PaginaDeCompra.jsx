import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { FormularioStl, LabelEstilizadoStl, SelectConteinerStl } from '../Personalizadas/Formulario/Formulario';
import CheckBox from '../../components/CheckBox/CheckBox';
import { getCep } from '../../servicos/viaCep';
import { useCarrinhoContext } from '../../hooks/useCarrinhoContext';
import ModalCompra from '../../components/ModalCompra/ModalCompra';

const PaginaDeCompra = ({ }) => {
	const { carrinho, setCarrinho } = useCarrinhoContext();

	// apiCep -----
	const [cep, setCep] = useState("")
	const [endereco, setEndereco] = useState({});
	useEffect(() => {
		pegarCep(cep)
	}, [cep]);

	async function pegarCep(cep) {
		if (cep != "") {
			var validacep = /^[0-9]{8}$/;
			if (validacep.test(cep)) {
				const cepData = await getCep(cep);
				setEndereco(cepData)
				return endereco;
			}
		}
	}

	// Modal
	const [show, setShow] = useState(false);
	const [dados, setDados] = useState({})

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// registro do formulário
	const { register, handleSubmit, reset, formState: { errors } } = useForm();

	const aoSubmit = async (data) => {

					const ohPedido = {
						nome: data.nome,
						email: data.email,
						tel: data.tel,
						cep: data.cep,
						Logradouro: endereco.logradouro,
						Bairro: endereco.bairro,
						Cidade: endereco.localidade,
						Estado: endereco.uf,
						complemento: data.complemento
					}
					setDados(ohPedido)
					
					reset()
					setEndereco({})
					return handleShow()
				}
	
	return (
		<PaginaDeCompraStl>
			<h1 className='tituloCompra'>Finalizar Compra</h1>
			<ConteinerrStl>

				<div className="bloco1">
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
					<ValorTotal>
						Valor Total:
						<span>
							{`R$ ${carrinho.reduce((soma, cur) => soma + parseInt(cur.valor), 0)},00`}
						</span>
					</ValorTotal>
				</div>

				<div className="bloco2">
					<FormularioStl onSubmit={handleSubmit(aoSubmit)}>
						<LabelEstilizadoStl>
							Nome
							<input className="estilizacao" type="text" {...register("nome", { required: true })} />
						</LabelEstilizadoStl>
						<LabelEstilizadoStl>
							Email
							<input className="estilizacao" type="email" {...register("email", { required: true })} />
						</LabelEstilizadoStl>
						<LabelEstilizadoStl>
							Telefone
							<input className="estilizacao" type="tel" {...register("tel", { required: true })} />
						</LabelEstilizadoStl>

						<LabelEstilizadoStl>
							Cep
							<input className="estilizacao"
								type="cep"
								placeholder='apenas numeros'
								{...register("cep", { required: true })}
								onChange={event => setCep(event.target.value)}
							/>
							{errors.cep && <span className="error">CEP obrigatório</span>}
						</LabelEstilizadoStl>

						<LabelEstilizadoStl>
							Logradouro
							<input
								className="estilizacao"
								type="text"
								{...register("logradouro")}
								value={endereco.logradouro || ''}
								disabled />
						</LabelEstilizadoStl>

						<LabelEstilizadoStl>
							Bairro
							<input
								className="estilizacao"
								type="text"
								{...register("bairro")}
								value={endereco.bairro || ''}
								disabled />
						</LabelEstilizadoStl>

						<LabelEstilizadoStl>
							Cidade
							<input
								className="estilizacao"
								type="text"
								{...register("cidade")}
								value={endereco.localidade || ''}
								disabled />
						</LabelEstilizadoStl>

						<LabelEstilizadoStl>
							Estado
							<input
								className="estilizacao"
								type="text"
								{...register("estado")}
								value={endereco.uf || ''}
								disabled />
						</LabelEstilizadoStl>

						<LabelEstilizadoStl>
							Complemento
							<input className="estilizacao" placeholder='casa xx / apt xx / loja xx' type="text" {...register("complemento", { required: true })} />
						</LabelEstilizadoStl>

						<LabelEstilizadoStl>
							Forma de pagamento
							<SelectConteinerStl {...register("pagamento", { required: true })}>
								<CheckBox
									name={""}
									valor={""}
								/>
								<CheckBox
									name={"Pix"}
									valor={"pix"}
								/>
							</SelectConteinerStl>
						</LabelEstilizadoStl>
						<ModalCompra handleClose={handleClose} show={show} {...dados} />

						<button className='btnForm' type="submit">Comprar</button>
					</FormularioStl>
				</div>

			</ConteinerrStl>
		</PaginaDeCompraStl>
	);
};

export const PaginaDeCompraStl = styled.section`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 64px;
	gap: 32px;
	margin: 0 auto 32px auto;
	border-radius: 32px;
	font-family: "Inknut Antiqua", serif;

	background: #9CCFC8;
	color: #270622;
	@media (min-width: 661px) and (max-width: 1024px) {
		width: 90%;
		padding: 32px 8px;

	}
	@media (max-width: 660px) {
		width: 90%;
		padding: 16px 8px;
	}
	.tituloCompra{
		font-size: 2rem;
		font-weight: bold;
		letter-spacing: .1em;
		@media (max-width: 660px) {
			font-size: 1.6rem;

		}
	}
`;

const ConteinerrStl = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: start;
	.bloco1{
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: start;
		
	}
	.bloco2{
		width: 50%;
		border-left: 2px solid #270622;
		@media (min-width: 661px) and (max-width: 1024px) {
			border-left: none;
		}
		@media (max-width: 660px) {
			font-size: 1.6rem;
			border-left: none;

		}
	}
`

export const ListaCompraCardStl = styled.ul`
	width: 80%;
	display: flex;
	flex-direction: column;
`
export const Lista = styled.li`
	display: flex;
	flex-direction: column;
	align-items: start;
	font-size: 1rem;
	padding: 8px 0;
	color: #270622;
	border-bottom: 1px solid #270622;
	span{
		font-size: .6rem;
		color: #270622;
	}
`
export const ValorTotal = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: start;
	padding: 32px 0;
	font-size: 1.1rem;
	font-weight: bold;
	@media (max-width: 660px) {
		flex-direction: column;
	}
	span{
		font-size: 1.2rem;
	}
`
export default PaginaDeCompra;