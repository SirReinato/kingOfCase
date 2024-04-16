import styled from 'styled-components';
import { TituloBannerStl } from '../Banner/Banner';
import { BtnPadraoStl } from '../BrnPadrao/BrnPadrao';

const Variedades = ({ }) => {
	return (
		<VariedadesStl>
			<div className="blocoVariedades">
				<TituloBannerStl>uma grande gama de aparelhos</TituloBannerStl>
			</div>

		</VariedadesStl>
	);
};

export const VariedadesStl = styled.div`
	width: 100%;
	height: 470px;
	display: flex;
	padding: 0 64px;
	align-items: center;
	background: url('/variedadesBg.png') no-repeat center;
	@media (min-width: 661px) and (max-width: 1024px) {
		height: 400px;
		padding: 0 16px;
		background: url('/variedadesBgTablet.png')no-repeat center; 
	}

	@media (max-width: 660px) {
		height: 179px;
		padding: 0 32px;
		background: url('/variedadesBgMobile.png')no-repeat center; 
	}
	.blocoVariedades{
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 64px;
		@media (min-width: 661px) and (max-width: 1024px) {
			align-items: start;

	}
		@media (max-width: 660px) {
			align-items: start;
		}
	}
`;

export default Variedades;