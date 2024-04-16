import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import LiMenu from '../LiMenu/LiMenu';
import { useContext, useState } from 'react';
import CarrinhoCompras from '../CarrinhoCompras/CarrinhoCompras';
import { CarrinhoContext } from '../../CarrinhoContext/CarrinhoContext';

const NavBarMenu = ({ }) => {
	const {carrinho} = useContext(CarrinhoContext)
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<NavBarMenuStl>
			<Navbar expand="lg">
				<Container fluid>

					<Navbar.Brand>
						<Link to={'/'}>
							<Logo path={'/logoHeader.png'} />
						</Link>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: '100px' }}
							navbarScroll
						>
								<LiMenu nome={'home'} to={''} />
								<LiMenu nome={'todas'} to={'todas'} />
								<LiMenu nome={'personalizadas'} to={'personalizadas'} />

							<NavDropdown title="aparelhos" className='aparelhos' id="navbarScrollingDropdown">
								<NavDropdown.Item>Samsung</NavDropdown.Item>
								<NavDropdown.Item>iPhone</NavDropdown.Item>
								<NavDropdown.Item>motorola</NavDropdown.Item>
								<NavDropdown.Item>XIAOMI</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item>
									OUTROS
								</NavDropdown.Item>
							</NavDropdown>

						</Nav>
						<Button variant="none" onClick={handleShow}>
							<img src="/carrinhoDeCompras.png" alt="imagem de um sacola para simbolizar o carrinho de compras" />
							<QuantidadeCarrinhoStl>{carrinho.length}</QuantidadeCarrinhoStl>
						</Button>
					</Navbar.Collapse>
				</Container>
				<CarrinhoCompras show={show} handleClose={handleClose} />
			</Navbar>
		</NavBarMenuStl>
	);
};

export const NavBarMenuStl = styled.div`
width: 100%;
padding: 16px 64px ;
align-items: center;
@media (max-width: 660px) {
	padding: 4px 8px;
    
}

.aparelhos{
	font-size: 0.8rem;
	font-family: "Inknut Antiqua", serif;
	color: #270622;
	text-transform: uppercase;

}

`;

const QuantidadeCarrinhoStl = styled.span`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: .8rem;
	font-weight: bold;
	position: absolute;
	border: 1px solid #270622;
	right: 0;
	top: 2px;
	@media (max-width: 660px) {
	left: 60px;
    top: 67%;
	}
	
	background: #77B1A9;
	color: #270622;
`

export default NavBarMenu;