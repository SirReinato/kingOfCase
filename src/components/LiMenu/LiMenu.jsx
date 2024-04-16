import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const LiMenu = ({ to, nome }) => {
	return (
		<LiMenuStl>
			<NavLink
				to={`/${to}`}
				className={({ isActive }) => {
					isActive ? 'isActive' : ""
				}}
			>
				{nome}
			</NavLink>
		</LiMenuStl>
	);
};

const LiMenuStl = styled.li`
	font-size: 0.8rem;
	font-family: "Inknut Antiqua", serif;
	color: #270622;
	text-transform: uppercase;
	display: flex;
	justify-content: end;
	margin-top: 8px;
	margin-left: 8px;

    `;
	


export default LiMenu;