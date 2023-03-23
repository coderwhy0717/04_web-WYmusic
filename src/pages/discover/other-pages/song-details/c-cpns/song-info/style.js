import styled from 'styled-components'

export const SongInfoWrapper = styled.div`
  display: flex;
  .player-image {
    width: 206px;
    margin-right: 20px;

    .image {
      position: relative;
      height: 205px;
      background-position: -140px -580px;
      img {
        width: 130px;
        height: 130px;
        margin: 38px;
        border-radius: 50%;
      }
      .ant-image-mask {
        width: 130px;
        height: 130px;
        margin: 38px;
        border-radius: 50%;
      }
    }
    .link {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      font-size: 12px;
      .icon {
        width: 16px;
        height: 16px;
        background-position: -34px -863px;
      }
      a {
        color: #0c73c2;
        text-decoration: underline;
      }
    }
  }
  .song-content {
    flex: 1;
    position: relative;
    .top-header {
      display: flex;
      width: 350px;
      .top-label {
        margin-top: 7px;
        width: 54px;
        height: 24px;
        margin-right: 10px;
        background-position: 0 -463px;
      }
      .text {
        flex: 1;
        .name {
          font-size: 24px;
          font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
          line-height: 1.3em;
          display: flex;
          align-items: center;
          .mv {
            margin-left: 15px;
            width: 21px;
            height: 18px;
            cursor: pointer;
            text-decoration: none;
            background-position: 0 -18px;
          }
        }
        .name-label {
          font-size: 14px;
          color: #bababa;
        }
      }
    }
    .song-info {
      margin-top: 15px;
      .info-name {
        font-size: 12px;
        color: #999;
        display: flex;
        align-items: center;
        a {
          font-size: 12px;
          color: #0c73c2;
        }
      }
      .album {
        margin: 5px 0 10px;
      }
    }
    .lyric {
      padding-bottom: 20px;
      margin: 40px 0 90px;
      position: relative;

      .top-panel .ant-collapse-header {
        cursor: text;
        color: #333;
      }
      .ant-collapse-header {
        display: block;
        padding: 0;
        font-size: 12px;
        line-height: 1.8em;
      }
      .ant-collapse-content-box {
        padding: 0;
        font-size: 12px;
        line-height: 1.8em;
      }
      .panel {
        .ant-collapse-header {
          position: absolute;
          left: 0;
          bottom: 0;
          color: #0c73c2;
          .tebel {
            display: inline-block;
            width: 11px;
            height: 8px;
            background-position: ${(props) => {
              switch (props.isTebel) {
                case 1:
                  return '-45px -520px'
                default:
                  return '-65px -520px'
              }
            }};
          }
        }
      }
    }
    .error {
      position: absolute;
      right: 10px;
      bottom: 0;
      font-size: 12px;
      .err-a {
        text-align: right;
        margin-bottom: 10px;
        text-decoration: underline;
        a {
          color: #999;
          margin-right: 10px;
          :last-child {
            margin-right: 0;
          }
        }
      }
      .err-b {
        text-align: right;
        color: #666;
        .err-b-a {
          text-decoration: underline;
        }
      }
    }
  }
`
