import styled from 'styled-components'

export const SongListDetailsWrapper = styled.div`
  background: url(${require('@/assets/img/wrap-bg.png')});
  font-size: 12px;
  display: flex;
`

export const SongListLeft = styled.div`
  display: ${(props) => {
    return props.err ? 'block' : 'none'
  }};
  width: 712px;
  padding: 47px 30px 40px 39px;
  .info-top {
    display: flex;
  }
  .image {
    position: relative;
    width: 208px;
    height: 208px;
    text-align: center;
    line-height: 207px;

    img {
      width: 200px;
      height: 200px;
    }
    .ant-image-mask {
      top: 3px;
      z-index: 9;
      width: 200px;
      height: 200px;
    }
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
      width: 208px;
      height: 208px;
      background-position: 0 -1285px;
    }
    .crown {
      position: absolute;
      top: 4px;
      left: 4px;
      width: 50px;
      height: 50px;
      z-index: 99;
      background-position: -80px -220px;
    }
  }
  .info {
    flex: 1;
    margin-left: 23px;
    .info-title {
      display: flex;
      padding-bottom: 15px;
      .icon {
        width: ${(props) => {
          return props.highQuality ? ' 72px' : '54px'
        }};
        height: 24px;
        background-position: ${(props) => {
          return props.highQuality ? '-110px -275px' : '0 -243px'
        }};
        margin: 3px 10px 0 0;
      }
      .title {
        flex: 1;
        line-height: 24px;
        font-size: 20px;
      }
    }
    .user-detail {
      display: flex;
      align-items: center;
      color: #999;
      margin-bottom: 20px;
      cursor: pointer;
      img {
        width: 35px;
        height: 35px;
        margin-right: 10px;
      }
      a {
        color: #0c73c2;
      }
      .user-icon {
        width: 13px;
        height: 13px;
      }
      .create {
        margin-left: 15px;
      }
    }
    .label {
      display: flex;
      align-items: center;
      margin: 25px 0 5px;
      .btns {
        button {
          border-radius: 15px;
          margin-right: 5px;
          padding: 1px 15px;
          border: 0.5px solid #ccc;
          color: #333;
          font-weight: 300;
          background-color: #f6f6f6;
          :hover {
            background-color: #fff;
            cursor: pointer;
          }
        }
      }
    }
    .text {
      p:nth-child(5) {
        overflow: hidden;
        text-overflow: clip;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: ${(props) => {
          return props.isShowText ? 'block' : '-webkit-box'
        }};
      }

      .show {
        text-align: right;
        color: #0c73c2;
        :hover {
          text-decoration: underline;
          cursor: pointer;
        }
        .icon {
          display: inline-block;
          width: 11px;
          height: 8px;
          background-position: ${(props) => {
            // console.log(props.isShowText)
            return props.isShowText ? '-45px -520px' : '-65px -520px'
          }};
        }
      }
    }
  }

  .playList-footer {
    font-size: 13px;
    text-align: center;
    margin-top: 30px;
    .text {
    }
    .download {
      display: inline-block;
      width: 120px;
      height: 30px;
      background-image: linear-gradient(90deg, #ff5a4c 0%, #ff1d12 100%);
      border-radius: 18px;
      line-height: 30px;
      font-size: 12px;
      color: #ffffff;
      text-align: center;
      cursor: pointer;
      margin-top: 18px;
    }
  }
`
export const SongListRight = styled.div`
  display: ${(props) => {
    return props.err ? 'block' : 'none'
  }};
  flex: 1;
  padding: 20px 40px 40px 30px;
  .like-songList {
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
