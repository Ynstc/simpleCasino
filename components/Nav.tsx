import Link from 'next/Link';
import { NavWrapper, List, ListItemLink } from '../styles/Nav.styles'

export const Nav = () => {
    return (
        <NavWrapper>
            <List>
                <ListItemLink>
                    <Link href='/'>Home</Link>
                </ListItemLink>
                <ListItemLink>
                    <Link href='/casino'>Casino</Link>
                </ListItemLink>
                <ListItemLink>
                    <Link href='/about'>About</Link>
                </ListItemLink>
            </List>
        </NavWrapper>
    )
}
