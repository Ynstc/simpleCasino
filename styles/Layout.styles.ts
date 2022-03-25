import styled from 'styled-components'

export const Container = styled('div')`
    background: ${({ theme }): string => theme.colors.backgroundPrimary};
    color: ${({ theme }): string => theme.colors.textPrimary};
    height: 100%;
`

export const MainWrapper = styled('main')`
    display: flex;
    justify-content: center;
    min-height: calc(100vh - 120px);
    padding: 0 10px;
`
