import styled from 'styled-components'

export const CommentItemWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 10px 0 10px;
  .top-name-time {
    color: #666;
    a {
      color: #0c73c2;
      font-weight: bold;
    }
  }
  .text-right {
    position: relative;
    flex: 1;
    margin-left: 20px;
    padding: 15px 20px;
    background-color: #f2f2f2;
    .top-name-time {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .right-time {
        display: flex;
        align-items: center;
        .time-icon {
          margin-left: 5px;
          width: 13px;
          height: 13px;
          background-position: -18px -682px;
        }
      }
    }
    .huifu {
      margin: 12px 0;
      color: #333;
    }
    .footer {
      .footer-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .on-hui {
          color: #0c73c2;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .show-huifu {
        margin-top: 20px;
        border-top: 1px dotted #ccc;
        .text {
          margin: 15px 0 5px;
        }
        .huifu-btn {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          ul {
            display: flex;
            align-items: center;
            .x {
              cursor: pointer;
              width: 18px;
              height: 18px;
              margin-right: 10px;
              background-position: -40px -490px;
              &:hover {
                background-position: -40px -490px;
              }
            }
            .me {
              width: 18px;
              height: 18px;
              cursor: pointer;
              background-position: -60px -490px;
              &:hover {
                background-position: -60px -490px;
              }
            }
          }
          .hui-btn {
            display: flex;
            align-items: center;
            .number {
              margin-right: 10px;
              color: #999;
            }
            .btn-h {
              width: 46px;
              height: 26px;
              text-align: center;
              line-height: 26px;
              border-radius: 2px;
              cursor: pointer;
              color: #fff;
              background-color: #3585d3;
              background: linear-gradient(to bottom, #4592db, #156fc0);
              &:hover {
                /* background-color: #3d8cd6; */
                background: linear-gradient(to bottom, #4592db, #3d8cd6);
              }
            }
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
  }
`
