import styled from 'styled-components'

export const PlayDetailWrapper = styled.div`
  @media screen and (max-width: 760px) {
    position: fixed;
    top: auto;
    left: -10px;
    bottom: 47px;

    width: 100vw;
    height: 301px;
    margin-left: 10px;

    .maskCoverConent {
      width: 100vw;
    }
  }

  display: ${(props) => {
    return props.maskCover ? 'block' : 'none'
  }};
  position: absolute;
  top: -301px;
  width: 100%;
  height: 301px;
  margin-left: 10px;
  /* background-color: red; */
  .maskCoverConent {
    color: #e2e2e2;
    overflow: hidden;
    .covertop {
      width: 100%;
      height: 41px;
      background-position: 0 0;
      background-repeat: repeat-x;
      display: flex;
      .title-left {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 18px 0 30px;
        width: 554px;
        .playlist-title {
          font-weight: 900;
          font-size: 14px;
        }
        .right-c {
          display: flex;
          .div-collect {
            display: flex;
            align-items: center;
            :hover {
              .collect-c {
                background-position: -24px -20px;
              }
              a {
                color: #fff;
              }
            }
            .collect-c {
              width: 16px;
              height: 16px;
              background-position: -24px 0;
            }
          }

          a {
            margin-left: 5px;
          }
          .icon-c {
            width: 2px;
            height: 15px;
            margin: 0 10px;
            border-left: 1px solid #000;
            border-right: 1px solid #2c2c2c;
          }
          .div-clear {
            display: flex;
            align-items: center;
            :hover {
              .clear-c {
                background-position: -51px -20px;
              }
              a {
                color: #fff;
              }
            }
            .clear-c {
              width: 16px;
              height: 16px;
              background-position: -51px 0;
            }
          }
        }
      }
      .title-right {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 428px;
        .name-c {
          width: 386px;
          text-align: center;
          font-size: 14px;
          color: #fff;
          font-weight: 900;
          padding-left: 42px;
        }
        .close {
          width: 30px;
          height: 30px;
          margin-right: 12px;
          background-position: -195px 9px;
          :hover {
            background-position: -195px -21px;
            cursor: pointer;
          }
        }
      }
    }
    .center {
      position: relative;
      left: 1px;
      display: flex;
      width: 100%;
      height: 260px;
      color: #9b9b9b;
      background-position: -1014px 0;
      background-repeat: repeat-y;
      border-radius: 2px;
      z-index: 1;
      img {
        position: absolute;
        width: 100%;
        height: auto;
        opacity: 0.4;
        z-index: -1;
      }
      .songConent {
        overflow: auto;
        width: 557px;
        height: 260px;
        background-color: rgba(0, 0, 0, 0.6);
        /*  */
        &::-webkit-scrollbar {
          width: 6px;
          background-color: #000;
        }
        &::-webkit-scrollbar-thumb {
          background: rgba(165, 165, 165, 0.5);
          border-radius: 10px;
        }
        .actives {
          color: #fff;
          background: rgba(0, 0, 0, 0.6);
          .user-name {
            a {
              color: #fff !important;
            }
          }
        }
        .song-detail {
          display: flex;
          align-items: center;
          width: 100%;
          height: 28px;

          &:hover,
          &.user-name {
            color: #fff;
            cursor: pointer;
            background: rgba(0, 0, 0, 0.6);
            a {
              color: #fff !important;
            }
          }
          .play-icon {
            width: 12px;
            height: 16px;
            margin: 3px 8px 0 8px;
            background-position: -182px 0;
          }
          .song-conent {
            flex: 1;
            display: flex;
            .name {
              flex: 1;
            }
            .user-name {
              width: 80px;
              a {
                color: #9b9b9b;
              }
            }
            .time {
              margin-left: 15px;
              width: 45px;
            }
          }
          .share {
            width: 16px;
            height: 16px;
            margin: 3px 10px 0 8px;
            background-position: -80px 0;
          }
        }
      }
      .din {
        width: 6px;
        height: auto;
        background-color: #000;
      }
      .lyConent {
        width: 422px;
        height: auto;
        background-color: rgba(0, 0, 0, 0.4);
        text-align: center;
        font-size: 12px;
        padding: 20px 0;
        overflow: auto;
        transition: all 1s ease;
        &::-webkit-scrollbar {
          width: 6px;
          background-color: #000;
        }
        &::-webkit-scrollbar-thumb {
          background: rgba(165, 165, 165, 0.5);
          border-radius: 10px;
        }
        .lyitem {
          transition: all 500ms ease;
          padding: 5px 40px 0;
          line-height: 2.5em;
          min-height: 40px;
        }
      }
      .lyactive {
        transition: all 250ms ease;
        color: #fff;
        font-size: 14px;
      }
    }
  }
`
