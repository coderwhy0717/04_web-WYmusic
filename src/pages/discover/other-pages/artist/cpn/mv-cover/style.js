import styled from 'styled-components'

export const MvCoverWrapper = styled.div`
  width: 137px;
  .mv-img {
    position: relative;
    width: 137px;
    height: 103px;
    box-shadow: 0 0 0.5px 0.1px rgba(0, 0, 0, 0.2);
    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 -1170px;
    }
    .icon-play {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 44px;
      height: 44px;
      margin: -22px 0 0 -22px;
      background-position: -30px -135px;
      z-index: 9;
      &:hover {
        background-position: -30px -85px;
      }
    }
  }
  .name {
    margin-top: 10px;
    font-size: 14px;
  }
`
