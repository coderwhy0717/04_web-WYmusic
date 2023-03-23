import styled from 'styled-components'

export const ArtistCoverWrapper = styled.div`
  width: 130px;
  .box-img {
    position: relative;
    display: inline-block;
    width: 130px;
    height: 130px;
    img {
      object-fit: cover;
    }
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 -680px;
      cursor: pointer;
    }
  }
  .artist {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    .name {
      color: #000;
    }
    .bgcicon {
      width: 17px;
      height: 18px;
      background-position: 0 -740px;
    }
  }
`
