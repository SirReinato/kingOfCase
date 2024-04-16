import styled from 'styled-components';
import ListaFooter from './ListaFooter/ListaFooter';
import Logo from '../Logo/Logo';
import InputFooter from './InputFooter/InputFooter';

const Footer = ({ }) => {
	return (
		<ConteinerFooter>
			<FooterStl>
				<NavStl>
					<ListaFooter children={'sobre'} />
					<ListaFooter children={'fale conosco'} />
					<ListaFooter children={'f.a.q (duvidas frequentes'} />
					<ListaFooter children={'política de troca e devolução'} />
				</NavStl>
				<Logo path={'/logoFooter.png'} />
				<InputFooter />
			</FooterStl>
			<Copy>
				<h3 className='copy'>copyright @ 2023 king of case - todos os direitos reservados.</h3>
			</Copy>
		</ConteinerFooter>
	);
};

const ConteinerFooter = styled.footer`
	display: flex;
	flex-direction: column;
`

const FooterStl = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 32px 64px;
	background: #270622;
	@media (min-width: 661px) and (max-width: 1024px) {
		padding: 32px 16px;
	}
	@media (max-width: 660px) {
		flex-direction: column-reverse;
		gap: 32px;
	}
`;

const NavStl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 8px;
`

const Copy = styled.div`
	padding: 16px 0;
	display: flex;
	justify-content: center;
	align-items: center;

	background: #9CCFC8;
	.copy{
		font-size: .8rem;
		letter-spacing: .1em;
		color: #270622;
		@media (max-width: 660px) {
			font-size: .6rem;
			
		}
	}
`

export default Footer;