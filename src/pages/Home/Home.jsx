import Banner, { TituloBannerStl } from "../../components/Banner/Banner";
import styled from "styled-components";
import CardCapinhas from "../../components/CardCapinhas/CardCapinhas";
import { BtnPadraoStl } from "../../components/BrnPadrao/BrnPadrao";
import Variedades from "../../components/Variedades/Variedades";
import Sobre from "../../components/Sobre/Sobre";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useCapinhasContext } from "../../hooks/useCapinhasContext";

const Home = ({ }) => {
	const { capinhas } = useCapinhasContext()

	var settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 2000,
		pauseOnHover: true
	};

	const marcas = ["Aple", "Samsung", "Motorola", "Xiaomi"];

	return (
		<ConteinerHomeStl>
			<Banner titulo={'Personalização da maneira que desejar'} link={'/personalizadas'} />

			<VitrineCapinhasStl>
				<Slider {...settings}>
					{capinhas.map(dados => {
						return (
							<div key={dados.id}>
								<CardCapinhas key={dados.id} {...dados} />
							</div>
						)
					})}
				</Slider>
			</VitrineCapinhasStl>
			<Link to={'/todas'}>
				<BtnPadraoStl
					borderbottom="#270622"
					color="#270622"
				>
					Ver mais
				</BtnPadraoStl>
			</Link>

			<Variedades />

			<VitrineMarcasStl>
				{
					marcas.map((dados, index) => {
						return (
							<CardMarcasStl key={index}>
								<AsMarcas key={index}>{dados}</AsMarcas>
							</CardMarcasStl>
						)
					})
				}
			</VitrineMarcasStl>

			<BannerNovidades>
				<TituloBannerStl fontSize="2rem" width="450px">
					EM BREVE TODOS OS TIPOS DE ACESSORIOS PARA O SEU CELULAR
				</TituloBannerStl>
			</BannerNovidades>
			<Sobre />

		</ConteinerHomeStl >
	);
};


export default Home;

const ConteinerHomeStl = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 64px;
	@media (max-width: 660px) {
		gap: 64px 8px;
	}
`
const VitrineCapinhasStl = styled.div`
	width: 60%;
	@media (min-width: 661px) and (max-width: 1024px) {
		width: 80%;
		
	}
	@media (max-width: 660px) {
		width: 95%;

	}
`

const VitrineMarcasStl = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
`

const CardMarcasStl = styled.figure`
	width: 200px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 16px;

	background: #2a102a;
	@media (min-width: 661px) and (max-width: 1024px) {
		width: 160px;
		height: 100px;
		
	}
	@media (max-width: 660px) {
		width: 88px;
		height: 42px;
	border-radius: 8px;

	}

`
const AsMarcas = styled.h3`
	font-family: "Inknut Antiqua", serif;
	font-size: 1.2rem;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: .1em;
	color: #9CCFC8;
`

const BannerNovidades = styled.div`
	width: 100%;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;

	background: url('/bgGradiente.png') no-repeat center;
	@media (max-width: 660px) {
		height: 154px;
		background: url('/bgGradienteMobile.png') no-repeat center;



	}
`
