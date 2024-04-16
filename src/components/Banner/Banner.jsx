import styled from 'styled-components';
import { BtnPadraoStl } from '../BrnPadrao/BrnPadrao';
import { Link } from 'react-router-dom';

const Banner = ({ titulo, link, display }) => {
	return (
		<BannerStl>
			<TituloBannerStl>{titulo}</TituloBannerStl>
			<Link to={link}>
				<BtnPadraoStl display={display}>Ver Mais</BtnPadraoStl>
			</Link>
		</BannerStl>
	);
};

const BannerStl = styled.div`
	width: 100%;
	height: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	padding: 64px;

	background: url('/bannerPadrao.png') no-repeat center;
	@media (min-width: 661px) and (max-width: 1024px) {
		padding:  40px;
		height: 400px;
		background: url('/bannerPadraoTablet.png') no-repeat center;
	}

	@media (max-width: 660px) {
		padding:  16px;
		height: 150px;
		gap: 8px;

		background: url('/bannerPadraoMobile.png') no-repeat center;

	}
`;

export const TituloBannerStl = styled.h1`
	width: ${props => props.width || "555px"};
	font-size: ${props => props.fontSize || "2.7rem"} ;
	font-family: "Inknut Antiqua", serif;
	line-height: 80px;
	text-transform: uppercase;
	text-align: center;
	color: #D9D9D9;
	@media (min-width: 661px) and (max-width: 1024px) {
		width: 44%;
		line-height: 50px;
		font-size: 1.6rem;
	}
	@media (max-width: 660px) {
		width: 40%;
		line-height: 30px;
		font-size: .8rem;
	}
`

export default Banner;