import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: -apple-system, BlinkMacSystemFont, Roboto,
    Ubuntu, Fira Sans, Helvetica Neue, sans-serif;

    }

    a {
        color: inherit;
        text-decoration: none;
    }
`

export const theme = {
    mediaQuery: {
        /** tablet: 768px */
        tablet: 'screen and (min-width: 768px)',
        /** desktop: 1024px */
        desktop: 'screen and (min-width: 1024px)',
        /** large desktop: 1200px */
    },
    colors: {
        backgroundPrimary: '#2d334f',
        textPrimary: '#c8c9db',
        navbarBg: '#242430',
        navbarHoverText: '#737480',
        gameTitleDesktop: '#242430',
        buttonActiveText: '#DC143C'
    },
}
