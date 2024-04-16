import styled from 'styled-components';

const Logo = ({ path }) => {
	return (
			<LogoStl src={path} alt='logo do nosso site' />

	);
};

const LogoStl = styled.img`
	width: ${props => props.widthMaior || '181px'};
	height: ${props => props.heightMaior || "60px"};
`;


export default Logo;