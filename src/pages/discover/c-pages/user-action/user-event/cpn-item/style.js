import styled from 'styled-components'

export const EventItemWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9e9e9;
  .a-img {
    width: 45px;
    height: 45px;
    margin-right: 10px;
  }
  .userimg {
    width: 45px;
    height: 45px;
    object-fit: cover;
    cursor: pointer;
  }
  .right {
    flex: 1;
    .name {
      font-size: 14px;
      color: #0c73c2;
    }
    .name-top {
      display: flex;
      font-size: 14px;
      margin-bottom: 10px;

      .identityIconUrl {
        width: 15px;
        height: 15px;
        margin: 0 5px 0 2px;
      }
      .type {
        color: #666;
      }
    }
    .time {
      color: #999;
    }
    .text {
      color: #333;
      margin: 10px 0 5px 0;
      font-size: 14px;
      white-space: pre-line;
      line-height: 1.72em;
    }
    .img-box {
      margin: 6px 0;
    }
  }
  .item4 {
    width: 258px !important;
  }
  .ant-image-img {
    object-fit: cover !important;
  }
  .song-info {
    display: flex;
    background-color: #f6f6f6;
    padding: 8px;
    margin: 10px 0;
    .img-song {
      position: relative;
    }
    .icon {
      position: absolute;
      top: 0;
      width: 40px;
      height: 40px;
      cursor: pointer;
      background-position: -100px -70px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
    }
    .play-song {
      margin-left: 10px;
      .music-name {
        font-size: 14px;
        margin-bottom: 8px;
      }
      .artist {
        width: 90%;
        color: #666;
      }
    }
  }
  .images-box {
    width: 358px;
    .image {
      flex-shrink: 0;
      margin: 2px;
      object-fit: cover !important;
    }
  }

  /* 视频 */
  .video {
    position: relative;
    width: 338px;
    .info-cover {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      color: #fff;
      background: rgba(0, 0, 0, 0.15);
      cursor: pointer;
      .top {
        width: 100%;
        box-sizing: border-box;
        font-size: 12px;
        line-height: 15px;
        padding: 10px;
        height: 100px;
        span {
          color: rgba(255, 255, 255, 0.5);
        }
      }
      .video-play {
        width: 100%;
        position: absolute;
        left: calc(50% - 20px);
        right: 50%;
        top: calc(50% - 20px);
        width: 40px;
        height: 40px;
        background-position: 0 -510px;
        opacity: 0.8;
        &:hover {
          opacity: 1;
        }
      }
      .bottom {
        position: absolute;
        bottom: 6px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        padding: 0 9px;
        i {
          display: inline-block;
          width: 12px;
          height: 10px;
        }
        .playTime {
          i {
            background-position: -50px -510px;
          }
        }
        .durationms {
          right: 0;
          i {
            background-position: -50px -530px;
          }
        }
      }
    }
  }
`
