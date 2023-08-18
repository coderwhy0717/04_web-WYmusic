import styled from 'styled-components'

export const PlayMusicBtnWrapper = styled.div`
  @media screen and (max-width: 760px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90vw;
    margin: 0 auto;
    .btn {
      font-size: 40px;
    }
    .plays {
      font-size: 50px;
    }
  }
`
