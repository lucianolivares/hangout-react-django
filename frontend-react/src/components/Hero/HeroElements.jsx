import styled from 'styled-components';
import background from '../../images/background.jpg';

export const HeroContent = styled.div`
  height: 25rem;
  background: url(${background});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 758px) {
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(2, 0, 36, 0.75) 50%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const Body = styled.p`
  font-size: clamp(1rem, 1.5vw + 0.5rem, 1.8rem);
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

export const Button = styled.button`
  background: white;
  font-size: clamp(1.5rem, 2vw + 0.8rem, 2.1rem);
  padding: 0.5em 1.5em;
  border: none;
  border-radius: 0.2rem;
  margin: 2rem;
  color: black;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
