import styled from 'styled-components'

export const ChatCoverWrapper = styled.div`
  .chat-time {
    color: #777;
    text-align: center;
    margin: 50px 0 30px;
  }
  .chat-conent {
    display: flex;
    .cc-img {
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }
  }
  .me {
    display: flex;
    justify-content: right;
  }
  .me-text {
    position: relative !important;
    background-color: #79ace5 !important;
    margin-right: 20px;
    .msg {
      color: #fff;
    }
  }
  .chat-text {
    position: relative;
    max-width: 435px;
    background-color: #f4f4f4;
    border-radius: 10px;
    padding: 16px 20px;
    line-height: 20px;
    color: #333;
    .s {
      color: #666;
    }
    .type23 {
      display: flex;
      align-items: center;
      margin-top: 5px;
      padding: 10px;
      background-color: #fff;
      min-width: 350px;
      .right {
        flex: 1;
      }
      .img23 {
        width: 60px;
        height: 60px;
        cursor: pointer;
      }
      .img12 {
        width: 90px;
        height: 60px;
      }
      .img-a {
        position: relative;
        .icon-a {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 9;
          width: 60px;
          height: 60px;
          background-position: -240px -180px;
        }
        .play {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 40px;
          height: 40px;
          margin: 0;
          background-position: -100px -70px;
          opacity: 0.8;
          z-index: 10;
          cursor: pointer;
          &:hover {
            opacity: 1;
          }
        }
      }
      .a {
        margin-left: 15px;
        font-size: 14px;
        color: #333;
      }
      .a-name {
        max-width: 300px;
        margin-left: 15px;
        a {
          color: #333;
        }
        span:last-child {
          span {
            display: none;
          }
        }
      }
    }
    .corr {
      position: absolute;
      top: 15px;
      left: -9px;
      width: 9px;
      height: 20px;
      background: url(https://s2.music.126.net/style/web2/img/msg/sprite.png?4abee654ba57d5c4949513b59555bb6f)
        no-repeat;
    }
    .me-corr {
      position: absolute;
      top: 15px;
      right: -8px;
      width: 9px;
      height: 20px;
      background: url(https://s2.music.126.net/style/web2/img/msg/sprite.png?4abee654ba57d5c4949513b59555bb6f)
        no-repeat;
      background-position: -10px 0;
    }
  }
`
