import { ThemeProvider } from 'styled-components'
import { Layout } from '../components/Layout';
import type { AppProps } from 'next/app'
import { GlobalStyle, theme } from '../styles/Theme.styles'


export function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
    </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
