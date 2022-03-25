import React, { useCallback, useEffect, useState } from 'react';
import {
    CasinoWrapper, SearchInput, FiltersWrapper,
    ButtonFilterWrapper, CasinoGrid, CasinoGameWrapper,
    ImageWrapper, GameImg, CasinoImageWrapper,
    ButtonAndTitleContainer, ButtonWrapper,
    GameTitleDesktop, GameTitleMobile
} from '../styles/Casino.styles'
import dataJson from '../public/data.json';

const ALL_GAMES = 'All Games'

interface CasinoGamesInterface {
    id: string,
    name: string
    icon_2: string
    cats: Array<{ title: string }>
}

interface PropsType {
    casinoGames: Array<CasinoGamesInterface>
}

const Casino = ({ casinoGames }: PropsType) => {
    const [games, setGames] = useState<Array<CasinoGamesInterface>>(casinoGames)
    const [gamesTypes, setGamesTypes] = useState<Array<string>>([])
    const [activeFilter, setActiveFilter] = useState<string>(ALL_GAMES)

    useEffect(
        () => {
            const filters: Array<string> = []

            games.map((game) => {
                game.cats.map(item => {
                    filters.includes(item.title) ? null : filters.push(item.title)
                })
            })
            setGamesTypes(filters)
        },
        []
    );

    const onChange = useCallback((event) => {
        const query = event.target.value;
        if (query.length > 2) {
            const filtered = casinoGames.filter(game => {
                return game.name.toLowerCase().includes(query)
            })
            setGames(filtered)
        } else {
            setGames(casinoGames)
        }
    }, [])

    const onGameTypeClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        //@ts-expect-error
        const filterName = e.target.getAttribute('data-filter')

        if (filterName === null) {
            return null;
        }
        const gamesArray: Array<CasinoGamesInterface> = []

        casinoGames.map(game => {
            return game.cats.map(item => {
                if (item.title.includes(filterName)) {
                    gamesArray.push(game)
                }
            })
        })
        setActiveFilter(filterName)
        setGames(gamesArray)
    }, [])

    const getAllGames = () => {
        setGames(casinoGames)
        setActiveFilter(ALL_GAMES)
    }

    return (
        <CasinoWrapper>
            <SearchInput type="text"
                onChange={onChange}
                placeholder='Type to search game...'
            />

            <FiltersWrapper>
                <ButtonFilterWrapper key={ALL_GAMES}
                    data-filter={ALL_GAMES}
                    onClick={getAllGames}
                    isActive={ALL_GAMES === activeFilter}
                    data-testid='buttonFilterWrapper'
                    >
                    {ALL_GAMES}
                </ButtonFilterWrapper>

                {gamesTypes.map(gameType => (
                    <ButtonFilterWrapper key={gameType}
                        data-filter={gameType}
                        onClick={onGameTypeClick}
                        isActive={gameType === activeFilter}
                        data-testid='buttonFilterWrapper'
                    >
                        {gameType}
                    </ButtonFilterWrapper>
                ))}

            </FiltersWrapper>

            <CasinoGrid>
                {games.map((game) => (
                    <CasinoGameWrapper
                        key={game.id}
                        data-testid='casinoGameWrapper'
                    >
                        <ImageWrapper>

                            <GameImg
                                src={game.icon_2}
                                alt={`${game.name} game`}

                            />
                        </ImageWrapper>
                        <CasinoImageWrapper>
                            <ButtonAndTitleContainer>
                                <ButtonWrapper
                                    onClick={() => console.log('imgine that games open')}
                                >
                                    Play a game
                                </ButtonWrapper>
                                <GameTitleDesktop>{game.name}</GameTitleDesktop>
                            </ButtonAndTitleContainer>
                        </CasinoImageWrapper>
                        <GameTitleMobile>
                            {game.name}
                        </GameTitleMobile>
                    </CasinoGameWrapper>
                ))}
            </CasinoGrid>
        </CasinoWrapper>
    )
}

export default Casino

export const getStaticProps = async () => {
    const response = await new Promise((resolve, reject) => {
        setTimeout(() => resolve(dataJson), 100);

    })
    const str = JSON.stringify(response)
    const casinoGames = JSON.parse(str)

    return {
        props: {
            casinoGames: casinoGames
        }
    }
}
