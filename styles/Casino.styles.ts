import styled from 'styled-components'

export const CasinoWrapper = styled('div')`
    padding: 9px 14px;
    width: 100%;
`

export const SearchInput = styled('input')`
    display: block ;
    height: 30px;
    margin: 30px 0 20px;
    width: 350px;
`

export const FiltersWrapper = styled('div')`
    margin-bottom: 20px;
`;

interface ButtonFilterWrapperType {
    isActive: boolean
}

export const ButtonFilterWrapper = styled('button') <ButtonFilterWrapperType>`
    background: black;
    border: solid 1px ${({ theme }): string => theme.colors.textPrimary};
    color: ${({ isActive, theme }): string => isActive ? theme.colors.buttonActiveText : 'inherit'};
    cursor: pointer;
    height: 34px;
    margin: 5px 2px 0 ;

`;

export const CasinoGrid = styled('div')`
    align-content: start;
    display: grid;
    grid-gap: 14px;
    gap: 14px;
    grid-template-columns: repeat(auto-fill, minmax(128px, auto));
    flex: 1 1 0%;
    width: 100%;
    @media ${({ theme }): string => theme.mediaQuery.mobile} {
        grid-template-columns: repeat(auto-fill, minmax(170px, auto));
    }
    @media ${({ theme }): string => theme.mediaQuery.tablet} {
        grid-gap: 16px;
        gap: 16px;
        grid-template-columns: repeat(auto-fill, minmax(228px, auto));
    }
    @media ${({ theme }): string => theme.mediaQuery.desktop} {
        grid-template-columns: repeat(auto-fill, minmax(200px, auto));
    }
`;

export const CasinoGameWrapper = styled('div')`
    position: relative;
    width: 100%;

    &:hover > div {
        opacity: 1;
        visibility: visible;
    }
`;

export const ImageWrapper = styled('div')`
    padding-top: 70%;
    position: relative;
    width: 100%;
`;
export const GameImg = styled('img')`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s ease-in-out;
`;

export const CasinoImageWrapper = styled('div')`
    display: none;
    flex-flow: column nowrap;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    position: absolute;
    visibility: hidden;
    transition: opacity .2s ease;
    @media ${({ theme }): string => theme.mediaQuery.tablet} {
        display: flex;
    }
`;

export const ButtonAndTitleContainer = styled('div')`
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex: 1 1 0%;
    flex-flow: column nowrap;
    justify-content: center;
`;

export const ButtonWrapper = styled('button')`
    background: black;
    color: white;
    cursor: pointer;
    height: 50px;
    width: 90%;
`;

export const GameTitleDesktop = styled('p')`
    cursor: pointer;
    color: ${({ theme }): string => theme.colors.gameTitleDesktop};
    max-width: 100%;
    margin: 0;
    line-height: 1.33;
    overflow: hidden;
    padding-top: 14px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media ${({ theme }): string => theme.mediaQuery.tablet} {
        cursor: default;
        line-height: 1.43;
    }
    @media ${({ theme }): string => theme.mediaQuery.desktop} {
        line-height: 1.33;
    }
`;

export const GameTitleMobile = styled('p')`
    line-height: 1.33;
    max-width: 100%;
    margin: 0;
    overflow: hidden;
    padding: 14px 0 20px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media ${({ theme }): string => theme.mediaQuery.tablet} {
        display: none;
    }
`;
