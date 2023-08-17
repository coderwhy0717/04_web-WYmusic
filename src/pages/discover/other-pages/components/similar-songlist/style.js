import styled from 'styled-components'

export const SimilarSongListWrapper = styled.div`
  font-family: '幼圆';
  margin-bottom: 40px;
  .item {
    display: flex;
    margin-bottom: 16px;
    img {
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
    .content {
      flex: 1;
      margin-left: 10px;
      .title {
        width: 140px;
        font-size: 14px;
        a {
          color: #000;
        }
      }
      .by {
        display: flex;
        flex-flow: nowrap;

        margin-top: 5px;
        span {
          font-size: 10px;
          color: #999;
          margin-right: 4px;
        }
        a {
          display: flex;
          flex-flow: nowrap;
          font-size: 12px;
          .hot-songList {
            max-width: 100px;
          }
          img {
            width: 13px;
            height: 13px;
            margin-left: 2px;
          }
        }
      }
    }
  }
`
