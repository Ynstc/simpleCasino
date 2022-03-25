import { Nav } from './Nav';
import { Footer } from './Footer'
import { Container, MainWrapper } from '../styles/Layout.styles'

interface Propstype {
    children: JSX.Element
}
export const Layout = ({children}:Propstype) => {
    return (
        <Container>
        <Nav />
            <MainWrapper>
                {children}
            </MainWrapper>
        <Footer/>
        </Container>
    )
}
