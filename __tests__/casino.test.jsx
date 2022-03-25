import { render, screen, fireEvent } from '@testing-library/react'
import Casino from '../pages/casino'
import { GlobalStyle, theme } from '../styles/Theme.styles'
import { ThemeProvider } from 'styled-components'

const CASINO_GAMES = [
    {
        id: '1',
        name: 'super game1',
        icon_2: 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG205.jpg',
        cats: [
            { title: 'Top games' }
        ]
    },
    {
        id: '2',
        name: 'hiper game2',
        icon_2: 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG205.jpg',
        cats: [
            { title: 'Christmas games' }
        ]
    },
    {
        id: '3',
        name: 'super game3',
        icon_2: 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG205.jpg',
        cats: [
            { title: 'Poker games' }
        ]
    }
]
describe('Casino', () => {
    beforeEach(() => {
        render(
            <ThemeProvider theme={theme}>
                <Casino
                    casinoGames={CASINO_GAMES}
                />
            </ThemeProvider>
        )

    })
    it('renders all providerd games', () => {
        const gamesTiles = screen.getAllByTestId('casinoGameWrapper')
        expect(gamesTiles.length).toBe(3)
    })

    it('searching games does not start if there is less than two chars', () => {
        const searchInput = screen.getByPlaceholderText('Type to search game...')

        fireEvent.change(searchInput, { target: { value: 'h' } })
        const gamesTiles = screen.getAllByTestId('casinoGameWrapper')
        expect(gamesTiles.length).toBe(3)

        fireEvent.change(searchInput, { target: { value: 'hi' } })
        const gamesTiles2 = screen.getAllByTestId('casinoGameWrapper')
        expect(gamesTiles2.length).toBe(3)
    })

    it('searching by SearchInput renders find one game', () => {
        const searchInput = screen.getByPlaceholderText('Type to search game...')

        fireEvent.change(searchInput, { target: { value: 'hiper' } })
        const gamesTiles = screen.getAllByTestId('casinoGameWrapper')

        expect(gamesTiles.length).toBe(1)
    })

    it('render 4 category filters', () => {

        const gameFilters = screen.getAllByTestId('buttonFilterWrapper')

        expect(gameFilters.length).toBe(4)
    })
})
