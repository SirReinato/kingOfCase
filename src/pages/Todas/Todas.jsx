import styled from 'styled-components';
import CardCapinhas from '../../components/CardCapinhas/CardCapinhas';
import { useCapinhasContext } from '../../hooks/useCapinhasContext';

const Todas = ({}) => {
	const {capinhas} = useCapinhasContext()

	return (
		<ConteinerTodas>
 			{capinhas.map(dados => {
					return (
						<CardCapinhas {...dados} key={dados.id} />
					)
				})}
 		</ConteinerTodas>
	);
};

const ConteinerTodas = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 32px;
	justify-content: space-between;
	align-items: center;
	padding: 32px 64px;
	@media (max-width: 660px) {
		padding: 32px 16px;
		gap: 8px;
		row-gap: 16px;
		justify-content: start;
		
	}
`;

export default Todas;