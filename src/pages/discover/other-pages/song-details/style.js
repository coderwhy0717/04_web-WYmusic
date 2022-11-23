import styled from 'styled-components'

export const SongDetailsWrapper = styled.div`
    background: url(${require('@/assets/img/wrap-bg.png')});
    display: flex;
`

export const SongLeft = styled.div`
    padding: 30px 30px;
    width: 712px;
    display: ${props => {
            return props.err ? 'block' : 'none'
        }};
`
export const SongRight = styled.div`
    width: 270px;
    padding: 20px 40px 40px 30px;
    display: ${props => {
            return props.err ? 'block' : 'none'
        }};
`