import styled from 'styled-components';

export const BtnPadraoStl = styled.button`
	font-size: ${props => props.fontSize || "1.2rem"} ;
	font-family: "Inknut Antiqua", serif;
	padding: 8px 16px;
	text-transform: uppercase;
	border-radius: 8px;
	display: ${props => props.display};
	background: ${props => props.backgroun};
	border: 3px solid ${props => props.borderbottom || "#D9D9D9"};
	color: ${props => props.color || "#D9D9D9"};

	&:hover{
		border: 3px solid ${props => props.btnborderhover || "#9CCFC8"};
		color: ${props => props.btncolorhover || "#9CCFC8"};
	}
	@media (max-width: 660px) {
		font-size: .6rem;
		padding: 4px 8px;
		border: 2px solid ${props => props.borderbottom || "#D9D9D9"};

	}
`;
