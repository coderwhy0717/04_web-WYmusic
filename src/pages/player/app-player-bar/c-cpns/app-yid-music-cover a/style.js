import styled from 'styled-components'

export const AppYidMusicCoverWrapper = styled.div`
  @media screen and (max-width: 760px) {
    /* .yid-app-play-box {
      display: flex !important;
      align-items: center;
      height: 45px;
      transform: translateX(-100px);
      img {
        border-radius: 50%;
      }
      .yid-app-name {
        margin-left: 20px;
      }
    } */
    /* * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    } */
    /* body {

    } */

    img {
      margin-left: 10px;
      width: calc(100%);
      height: 340px;
      object-fit: cover;
    }
    .wrapper {
      max-width: 1200px;
      position: relative;
    }
    .carousel {
      white-space: nowrap;
      font-size: 0px;
      cursor: pointer;
      overflow: hidden;
      scroll-behavior: smooth;
    }
    .wrapper .carousel img:first-child {
      margin-left: 0px;
    }
    .carousel.dragging {
      scroll-behavior: auto;
      cursor: grab;
    }
    .carousel.dragging img {
      pointer-events: none;
    }
  }
  /* width: 100%;
  height: 200px;
  background-color: #fff;
  color: #fff; */
`
