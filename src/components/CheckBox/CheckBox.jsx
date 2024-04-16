import styled from 'styled-components';

const CheckBox = ({ name, valor }) => {
	return (
			<CheckBoxStl value={valor}>{name}</CheckBoxStl>
	);
};
// const ConteinerStl = styled.select`
// 	display: flex;
// 	justify-content: start;
// 	gap: 8px;
// `
const CheckBoxStl = styled.option`
font-family: "Inknut Antiqua", serif;

color: #270622;
	/* appearance: none; */
    background-color: none; /* Cor de fundo */
    border: 2px solid #270622; /* Borda */
    
    
`;
const LabelCheckBoxStl = styled.label`
	font-family: "Inknut Antiqua", serif;

	color: #270622;
`
export default CheckBox;