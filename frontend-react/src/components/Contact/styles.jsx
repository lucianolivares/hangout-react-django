import styled from 'styled-components'

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0.1rem 1rem #000000;
`
