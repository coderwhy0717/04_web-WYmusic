import styled from 'styled-components'

export const AppYidMusicCoverWrapper = styled.div`
  @media screen and (max-width: 760px) {
    /*手机端 底部播放器  */
    .yid-app-play-box {
      display: flex !important;
      align-items: center;
      height: 45px;
      color: #fff;

      .yid-app-play-bgimg {
        img {
          width: 35px;
          height: 35px;
          object-fit: cover;
          border-radius: 50%;
        }
      }

      .yid-app-name {
        margin-left: 15px;
      }
      /* 播放旋转动画  !important 因为使用了行内样式animation 权重不够控制不到animation */
      .yid-music-img {
        animation-play-state: ${(props) =>
          props.anim ? 'running' : 'paused'} !important;
      }
      /* 动画 */
      @keyframes musicImg {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
    /* 手机端 点击底部进入歌曲详情页 */
    .yid-open {
      /* background: url(${require('@/assets/img/sprite_02.png')}) center/cover; */
      /* background: url(${(props) => props.imgUrl}) center/cover; */
      /* transition: all 1s ease; */
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9999999;
      /* 手机端 简单的动画效果 */
      transform: ${(props) =>
        props.open ? 'translateY(0%)' : 'translateY(100%)'};
      transition: transform 0.3s ease-in-out;
      background-color: #000;

      width: 100vw;
      height: 100vh;
      /* 防止 背景溢出 */
      overflow: hidden;
      /* 高斯模糊 手机端 */
      .yid-bg-img,
      .yid-bg-cover {
        position: fixed;
        left: 0;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        transform: scale(1.5);
      }
      .yid-bg-cover {
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(30px);
      }
      .yid-open-head {
        display: flex;
        .yid-center {
          flex: 6;
          font-size: 18px;
          padding: 8px 20px;
          color: #000;
          text-align: center;
          color: #fff;
          /* background-color: #fff; */
          .text {
            display: inline-block;
            overflow: hidden;
            .yid-song-name {
              max-width: 200px;
              /* color: #000; */
              /* background-color: #fff; */
              white-space: nowrap;
            }
          }
          /* 动画 */
          @keyframes move_eye {
            from {
              margin-left: 100%;
            }
            to {
              margin-left: -100%;
            }
          }
          .yid-ar-name {
            font-size: 16px;
            color: #ccc;
          }
        }
      }
      .yid-open-center {
        .yid-open-music-img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -80%);

          img {
            width: 60vw;
            height: 60vw;
            border-radius: 50%;
          }
        }
      }
      .yid-open-footer {
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        .abcs {
          font-size: 60px;
          color: red;
        }
        .yid-open-btn-box {
          display: flex;
          align-items: center;
        }
        .cycle {
          background-position: ${(props) => {
            switch (props.sequence) {
              case 1:
                return '-66px -248px;'
              case 2:
                return '-66px -344px'
              default:
                return '-3px -344px'
            }
          }};
        }

        .yid-open-btns {
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 0 30px;
          font-size: 22px;
        }
        .yid-open-slider {
          padding: 20px 10px;
          display: flex;
          align-items: center;
          .slider {
            flex: 8;
            display: inline-block;
            .ant-slider-rail {
              height: 2px;
              background-color: #414143;
            }

            .ant-slider-track {
              height: 2px;
              background-color: #c0c0c9;
            }

            .ant-slider-handle {
              width: 14px;
              height: 16px;
              border: none;
              margin-top: -5px;
              background: url(${require('@/assets/img/sprite_icon.png')}) -42px -250px;
            }
            .ant-slider-handle::before {
              display: none;
            }
            .ant-slider-handle::after {
              display: none;
            }
          }
          i {
            width: 45px;
            margin-top: -3px;
            text-align: center;
          }
        }
      }
    }
  }
  width: 100%;
  height: 45px;
  /* background-color: #fff; */
  color: #fff;
`
