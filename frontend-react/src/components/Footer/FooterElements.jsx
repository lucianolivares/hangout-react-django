import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  /* box-shadow: 0 -0.1rem 0.5rem #000000; */
  p {
    text-align: center;
    width: 40ch;
  }
`;
export const CopyRightContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: end;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`;
export const IconsLinks = styled.img``;
