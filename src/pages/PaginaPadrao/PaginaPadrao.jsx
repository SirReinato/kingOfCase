import styled from "styled-components";
import { Outlet } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
import SupHeader from "../../components/SupHeader/SupHeader";
import NavBarMenu from "../../components/NavBarMenu/NavBarMenu";
import SetaParaCima from "../../components/SetaParaCima/SetaParaCima";

const PaginaPadrao = ({ }) => {
	return (
		<ConteinerStl>
			<HeaderStl>
				<div className="sup">
					<SupHeader />
				</div>
				<NavBarMenu />
			</HeaderStl>

			<MainStl>
				<Outlet />
				<SetaParaCima />
			</MainStl>

			<Footer />

		</ConteinerStl>
	);
};

export default PaginaPadrao;

const ConteinerStl = styled.div`
	width: 100%;
	min-height: 100vh;

	background-color: #D9D9D9;

`

const HeaderStl = styled.header`
	width: 100%;
	max-width: 1440px;
	display: flex;
	flex-direction: column;
	align-items: center;

	background: #D9D9D9;
	.sup{
		width: 100%;
		padding: 8px 64px;
		display: flex;
		justify-content: center;

		gap: 64px;
		background: #270622;
		color: #D4F5E8;

		@media (max-width: 660px) {
			padding: 4px 8px;
    
		}
	}
`

const MainStl = styled.main`
	width: 100%;
	justify-content: center;
	align-items: center;
`
