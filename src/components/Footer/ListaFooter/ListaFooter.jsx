import styled from 'styled-components';

const ListaFooter = ({children}) => {
	return (
		<ListaFooterStl>
			{children}
 		</ListaFooterStl>
	);
};

const ListaFooterStl = styled.li`
	font-size: .8rem;
	text-transform: uppercase;
	color: #d4f5e8;
	cursor: pointer;
`;

export default ListaFooter;