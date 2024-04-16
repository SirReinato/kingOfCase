import styled from 'styled-components';
import Banner from '../../components/Banner/Banner';
import Formulario from './Formulario/Formulario';
import EnderecoForm from '../../components/EnderecoForm/EnderecoForm';

const Personalizadas = ({ }) => {
	return (
		<PersonalizadasStl>
			<Banner titulo={'Personalize sua capinha'} display="none"/>
			<Formulario/>
			
		</PersonalizadasStl>
	);
};
export default Personalizadas;

export const PersonalizadasStl = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;

`;
