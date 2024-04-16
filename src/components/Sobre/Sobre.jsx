import styled from 'styled-components';
import Logo from '../Logo/Logo';

const Sobre = ({ }) => {
	return (
		<SobreStl>
			<h2 className='sobre'>Sobre</h2>
			<ConteinerSobreStl>
				<div>
					<p className='textSobre'>
						Olá, me chamo Renato França.
					</p>
					<p className='textSobre'>
						Esse é o meu projeto King of Case, todas as etapas do projeto foram feitas por mim. King of Case é um site criado com o intuito de treinar os conhecimentos no React.js e tratos com API.
					</p>
					<p className='textSobre'>
						Todo seu Design foi criado no FIGMA, este site ainda está em desenvolvimento, algumas páginas a ser colocadas, mas já se pode ter uma boa ideia de como ele vai ficar quando completo.
					</p>
				</div>
				<img className='logoSobre' src={'/LogoSobre.png'} alt="Logo do nosso site"/>
			</ConteinerSobreStl>
		</SobreStl>
	);
};

const SobreStl = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: "Inknut Antiqua", serif;
	@media (min-width: 661px) and (max-width: 1024px) {
		align-items: start;
		padding: 0 16px;

	}
	@media (max-width: 660px) {
		align-items: start;
		padding: 0 16px;
		
	}

	.sobre{
		font-size: 1.5rem;
		letter-spacing: .1em;
		text-transform: uppercase;
		font-weight: bold;

		color: #270622;
	}
`;

const ConteinerSobreStl = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 0 64px;
	box-sizing: border-box;
	@media (min-width: 661px) and (max-width: 1024px) {
		align-items: start;
		padding: 32px 0;
	}
	@media (max-width: 660px) {
		align-items: start;
		padding: 16px 0;
		
	}
	.textSobre{
		width: 450px;
		font-size: 1rem;
		@media (min-width: 661px) and (max-width: 1024px) {
			width: 80%;
			font-size: 1.2rem;
		}
		@media (max-width: 660px) {
			width: 80%;
			font-size: 1rem;
		}
	}
	.logoSobre{
		width: 400px;
		@media (min-width: 661px) and (max-width: 1024px) {
			width: 35%;
			font-size: 1.2rem;
		}
		@media (max-width: 660px) {
			position: absolute;
			width: 30%;
			right: 0;
			margin-top: -100px;
		}
	}
`

export default Sobre;