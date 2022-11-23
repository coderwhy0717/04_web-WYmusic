import styled from 'styled-components'

export const RankingConentWrapper = styled.div`
    padding: 40px 40px;

    .songList {
        width: 670px;
        display: ${props => {
            return props.err ? 'block' : 'none'
        }};
    }
`