import styled from 'styled-components';
import ListaFooter from '../ListaFooter/ListaFooter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InputFooter = ({}) => {
	function aoEnviar(event) {
		event.preventDefault();
		const email = document.getElementById('emailNews').value
		
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			toast.error('Por favor, insira um e-mail válido.');
			return; 
		  }
		const notificacao = toast(`Email: ${email} registrado com sucesso !`);

		return notificacao
	}
	return (
		<InputFooterStl onSubmit={aoEnviar}>
 			<LabelInput>
				assine nossa newsletter
				<input type="email" required id='emailNews' />
				<button type='submit'><img src="/CartaEmail.png" alt="btn com cartao" /></button>
			</LabelInput>
				<ToastContainer
					position="top-right"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
					transition: Zoom
				/>
			<NavRedesSociais>
				<ListaFooter><img src="/instagran.png" alt="logo instagran"/></ListaFooter>
				<ListaFooter><img src="/twitter.png" alt="logo do site" /></ListaFooter>
				<ListaFooter><img src="/wpp.png" alt="logo do site" /></ListaFooter>
			</NavRedesSociais>
 		</InputFooterStl>
	);
};

const InputFooterStl = styled.form`
	width: 344px;
	display: flex;
	flex-direction: column;
	gap: 2px;
	@media (min-width: 661px) and (max-width: 1024px) {
			width: 280px;

		}
`;

const LabelInput = styled.label`
	font-size: .6rem;
	font-family: "Inknut Antiqua", serif;
	letter-spacing: .1em;
	color: #d4f5e8;
	text-transform: uppercase;
	input{
		width: 260px;
		height: 36px;
		background: none;
		padding: 0 8px;
		border: 2px solid #d4f5e8;
		color: #d4f5e8;
		@media (min-width: 661px) and (max-width: 1024px) {
			width: 200px;

		}
	}
	button{
		width: 78px;
		height: 36px;
		cursor: pointer;
		position: absolute;
	}
	
`
const NavRedesSociais = styled.ul`
	display: flex;
	justify-content: start;
	gap: 8px;
`

export default InputFooter;