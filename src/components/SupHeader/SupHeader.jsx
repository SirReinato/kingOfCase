import styled from 'styled-components';
import React from "react";
import Slider from "react-slick";

const SupHeader = ({ }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		autoplay: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 5000,
		cssEase: "linear"
	};
	return (
		<SupHeaderStl>
			< Slider {...settings}>
				<div>
					<p className='supText'>As melhores ofertas você só encontra aqui</p>
				</div>
				<div>
					<p className='supText'>10% off na sua primeira compra com o cupom kingNew</p>
				</div>
				<div>
					<p className='supText'>Frete gratis para todo o brasil</p>
				</div>
				<div>
					<p className='supText'>Personalizações para todos os tipos de celulares</p>
				</div>
			</Slider >
		</SupHeaderStl>

	);
};

const SupHeaderStl = styled.div`
	width: 100%;
	text-align: center;
	
	.supText{
		color: #D4F5E8;
		font-size: 0.8rem;
	}
`;

export default SupHeader;