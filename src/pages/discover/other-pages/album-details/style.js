import styled from 'styled-components'

export const AlbumDetailWrapper = styled.div`
  background: url(${require('@/assets/img/wrap-bg.png')});
  display: flex;
  .album-left {
    display: ${(props) => {
      return props.err ? 'block' : 'none'
    }};
    width: 712px;
    padding: 47px 30px 40px 39px;
    .album-title {
      display: flex;
      margin-bottom: 20px;
      .image {
        position: relative;
        width: 209px;
        height: 177px;
        overflow: hidden;

        img {
          width: 177px;
          height: 177px;
        }
        .ant-image-mask {
          width: 177px;
          height: 177px;
          z-index: 9;
        }
        .cover {
          position: absolute;
          top: 0;
          right: 0;
          width: 209px;
          height: 177px;
          background-position: 0 -986px;
        }
      }
      .title {
        flex: 1;
        margin-left: 20px;
        .title-name {
          display: flex;
          margin-bottom: 10px;
          .album-icon {
            width: 54px;
            height: 24px;
            background-position: 0 -186px;
          }
          .text {
            flex: 1;
            margin-top: -4px;
            margin-left: 10px;
            font-size: 20px;
          }
        }
      }
      .info {
        margin-bottom: 20px;
        .artists {
          display: flex;
          margin-bottom: 0px;
        }
        div {
          margin-bottom: 5px;
          a {
            color: #0c73c2;
          }
        }
      }
    }
    .album-text {
      .albumtext {
        font-weight: 600;
      }
      div:nth-child(4) {
        overflow: hidden;
        text-overflow: clip;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        display: ${(props) => {
          return props.isShowAlbumText ? 'block' : '-webkit-box'
        }};
      }
      .unfold {
        margin-top: 10px;
        text-align: right;
        color: #0c73c2;
        cursor: pointer;
        .icon {
          display: inline-block;
          width: 11px;
          height: 8px;
          background-position: ${(props) => {
            return props.isShowAlbumText ? '-45px -520px' : '-65px -520px'
          }};
        }
      }
    }
  }
  .album-right {
    display: ${(props) => {
      return props.err ? 'block' : 'none'
    }};
    flex: 1;
    padding: 20px 40px 40px 30px;
    .user-img {
      margin-bottom: 25px;
      a {
        .image {
          width: 40px;
          height: 40px;
          margin: 0 13px 13px 0;
          cursor: pointer;
        }
        :nth-child(4) {
          .image {
            margin-right: 0 !important;
            background-color: red;
          }
        }
        :last-child {
          .image {
            margin-right: 0;
          }
        }
      }
    }
  }
`
