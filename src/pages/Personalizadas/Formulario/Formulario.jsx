import styled from 'styled-components';
import CheckBox from '../../../components/CheckBox/CheckBox';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { CarrinhoContext } from '../../../CarrinhoContext/CarrinhoContext';
import { toast } from 'react-toastify';



const Formulario = ({ }) => {
	const { register, handleSubmit, reset } = useForm();

	const { carrinho, setCarrinho } = useContext(CarrinhoContext)


	const onSubmit = (data) => {
		const novoPedido = {
			nome: data.marca,
			modelo: data.telefone,
			path: `/capinhas/${data.personalizacao}.png`,
			personalizacao: data.personalizacao,
			observacao: data.observacao,
			valorOriginal: 40.00,
			valor: 35.00
		}
		const notify = toast("adicionado ao carrinho");


		setCarrinho([...carrinho, novoPedido]);

		reset();
		return notify
	}
	return (

		<ConteinerFormularioStl>
			<FormularioStl onSubmit={handleSubmit(onSubmit)}>

				<ConteinerCada>
					<LabelEstilizadoStl>
						Selecione a marca do seu celular
						<SelectConteinerStl {...register("marca", { required: true })}>
							<CheckBox
								name={""}
								valor={""}
							/>
							<CheckBox
								name={"iPhone"}
								valor={"iphone"}
							/>
							<CheckBox
								name={"Samsung"}
								valor={"samsung"}
							/>
							<CheckBox
								name={"Motorola"}
								valor={"motorola"}
							/>
							<CheckBox
								name={"Xiaomi"}
								valor={"xiaomi"}
							/>
						</SelectConteinerStl>
					</LabelEstilizadoStl>
					<LabelEstilizadoStl>
						Informe o modelo do seu celular
						<input className="estilizacao" type="text" {...register("telefone", { required: true })} />
					</LabelEstilizadoStl>
				</ConteinerCada>
				<ConteinerCada>
					<ConteinerCheckBoxStl>
						<LabelEstilizadoStl>
							Escolha o tipo de personalização
							<SelectConteinerStl {...register("personalizacao", { required: true })}>
								<CheckBox
									name={""}
									valor={""}
								/>
								<CheckBox
									name={"3 fotos"}
									valor={"3fotos"}
								/>
								<CheckBox
									name={"Foto Grande"}
									valor={"ftGg"}
								/>
								<CheckBox
									name={"Diagonal"}
									valor={"diagonal"}
								/>
								<CheckBox
									name={"Time do Coração"}
									valor={"timeDoCoracao"}
								/>
							</SelectConteinerStl>
						</LabelEstilizadoStl>
					</ConteinerCheckBoxStl>

					<LabelEstilizadoStl>
						Observação
						<input className="estilizacao" type="text" {...register("observacao", { required: true })} />
					</LabelEstilizadoStl>
				</ConteinerCada>
				<button className='btnForm' type="submit">Enviar</button>
			</FormularioStl>
			<img 
				src="/capinhasPersonalizadas.png" 
				alt="fotos das capinhas personalizadas" 
				srcSet='
					/capinhasPersonalizadasMobile.png 60w,
					/capinhasPersonalizadas.png 1200w
					'
				/>
		</ConteinerFormularioStl>
	);
};

const ConteinerFormularioStl = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 64px;
	padding-bottom: 64px;
`

export const FormularioStl = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	@media (max-width: 660px) {
		align-items: center;

	}
	.btnForm{
		font-size: 1rem;
		padding: 8px 16px;
		border-radius: 8px;

		color: #D4F5E8;
		background: #4A1F5C;
	}
`;

const ConteinerCada = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
	@media (max-width: 660px) {
		flex-direction: column;
		align-items: start;
		gap: 16px;

	}
`

const ConteinerCheckBoxStl = styled.div`
	width: 340px;
	display: flex;
	flex-direction: column;
	align-items: start;
`

export const LabelEstilizadoStl = styled.label`
	font-size: 1rem;
	font-family: "Inknut Antiqua", serif;
	display: flex;
	flex-direction: column;
	color: #270622;
	@media (max-width: 660px) {
		width: 100%;
		
	}	
	.estilizacao{
		width: 344px;
		height: 42px;
		background: #4a1f5c;
		padding: 16px;
		border-radius: 8px;
		border: none;
		color: #9CCFC8;
		@media (max-width: 660px) {
			width: 100%;
		}
	}
`;
export const SelectConteinerStl = styled.select`
	display: flex;
	justify-content: start;
	gap: 8px;
`
export default Formulario;