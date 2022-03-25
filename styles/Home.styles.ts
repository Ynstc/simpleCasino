import styled from 'styled-components'

export const Title = styled('h1')`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 30px;
    padding-top: 40px;
    text-align: center;

    @media ${({ theme }): string => theme.mediaQuery.tablet} {
        font-size: 50px;
    }
`
