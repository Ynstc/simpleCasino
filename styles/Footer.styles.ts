import styled from 'styled-components'

export const FooterWrapper = styled('footer')`
    align-items: center;
    color: ${({ theme }): string => theme.colors.navbarHoverText};
    display: flex;
    flex: 1;
    height: 50px;
    justify-content: center;
`
export const FooterText = styled('span')`
    border-top: 1px solid black;
    padding: 15px 100px;
`;
