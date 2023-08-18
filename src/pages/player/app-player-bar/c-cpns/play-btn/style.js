import styled from 'styled-components'

export const PlayBtnWrapper = styled.div`
  @media screen and (max-width: 760px) {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    justify-content: space-around;
    width: 90vw;
    margin: 0 auto;

    .rwa,
    .prev {
      display: ${(props) => (props.open ? 'block' : 'none')};
    }
    .play {
      text-align: right;
    }
  }

  display: flex;
  align-items: center;
  width: 137px;
  .rwa {
    width: 28px;
    height: 28px;
    cursor: pointer;
  }

  .prev {
    background-position: 0 -130px;
    :hover {
      background-position: -30px -130px;
    }
  }
  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    cursor: pointer;

    background-position: 0 ${(props) => (props.isPlaying ? '-165px' : '-204px')};
    :hover {
      background-position: -40px
        ${(props) => (props.isPlaying ? '-165px' : '-204px')};
    }
  }
  .next {
    background-position: -80px -130px;
    :hover {
      background-position: -110px -130px;
    }
  }
`
