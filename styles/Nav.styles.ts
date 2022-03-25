import styled from 'styled-components'

export const NavWrapper = styled('nav')`
    align-items: center;
    background: ${({ theme }): string => theme.colors.navbarBg};
    display: flex;
    height: 50px;
    justify-content: center;
    padding: 10px;
`

export const List = styled('ul')`
    align-items: center;
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
`

export const ListItemLink = styled('li')`
    a {
        margin: 5px 15px;

        &:hover {
            color: ${({ theme }): string => theme.colors.navbarHoverText};
        }
    }
`
