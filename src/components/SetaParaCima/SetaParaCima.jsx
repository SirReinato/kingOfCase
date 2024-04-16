import { useState, useEffect } from 'react';
import styled from 'styled-components';

const SetaParaCima = ({ }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setIsScrolled(window.scrollY > 0);
		});
	}, []);

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<SetaParaCimaStl isScrolled={isScrolled} onClick={handleClick}>
			<span><img className='seta' src="/seta.png" alt="img de uma seta"/></span>
		</SetaParaCimaStl>
	);
};

export const SetaParaCimaStl = styled.div`
position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
  cursor: pointer;
  opacity: ${(props) => (props.isScrolled ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  animation: ${(props) =>
		props.isScrolled ? 'sobeDesce 1.5s infinite ease-in-out' : 'none'};

  @keyframes sobeDesce {
    0% {
      bottom: 24px;
    }
    50% {
      bottom: 32px;
    }
    100% {
      bottom: 24px;
    }
  }

  span {
	  .seta{
		width: 50px;
		height: 50px;
		
	}
  }
`;


export default SetaParaCima;