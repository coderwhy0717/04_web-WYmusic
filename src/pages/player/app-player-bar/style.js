import styled from 'styled-components'

export const AppPlayerBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: 0 0;
  background-repeat: repeat;
  height: 52px;
  z-index: 999999999;
  .wrap {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    height: 47px;
  }
  .cover {
    display: ${(props) => {
      return props.maskCover ? 'block' : 'none'
    }};
    position: absolute;
    left: 0;
    top: -100vh;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }
`
export const PlayerBarLeft = styled.div`
  display: flex;
  align-items: center;
  width: 137px;
  .rwa {
    width: 28px;
    height: 28px;
    cursor: pointer;
  }

  .prev {
    background-position: 0 -130px;
    :hover {
      background-position: -30px -130px;
    }
  }
  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    cursor: pointer;

    background-position: 0 ${(props) => (props.isPlaying ? '-165px' : '-204px')};
    :hover {
      background-position: -40px
        ${(props) => (props.isPlaying ? '-165px' : '-204px')};
    }
  }
  .next {
    background-position: -80px -130px;
    :hover {
      background-position: -110px -130px;
    }
  }
`
export const PlayerBarCenter = styled.div`
  width: 631px;
  display: flex;
  align-items: center;
  height: 47px;
  font-size: 12px;
  overflow: hidden;
  .image {
    position: relative;
    width: 34px;
    height: 35px;
    border-radius: 10px;
    .image-a {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 34px;
      height: 35px;
      background-position: 0 -80px;
    }
    img {
      width: 34px;
      height: 35px;
    }
  }
  .content {
    margin-left: 15px;
    height: 47px;
    .content-top {
      display: flex;
      align-items: center;
      margin-top: 4px;
      font-size: 12px;
      .title {
        color: #e8e8e8;
        max-width: 300px;
      }
      .name {
        margin: 0 14px;
        max-width: 220px;
        color: #b9b9b9;
        a {
          color: #b9b9b9;
        }
        span:last-child i {
          display: none;
        }
      }
      .link {
        display: inline-block;
        width: 14px;
        height: 15px;
        margin-left: 14px;
        margin-bottom: -4px;
        background-position: -110px -103px;
        :hover {
          background-position: -130px -103px;
        }
      }
    }
    .content-footer {
      display: flex;
      align-items: center;
      color: #797979;
      margin-top: -9px;
      .ant-slider {
        width: 480px;
        margin-right: 10px;
        .ant-slider-rail {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require('@/assets/img/sprite_icon.png')}) 0 -250px;
        }
      }
      .time {
        margin-left: 5px;
        .time-left {
          color: #a1a1a1;
        }
      }
    }
  }
`
export const PlayerBarRight = styled.div`
  width: 214px;
  display: flex;
  align-items: center;
  .left {
    display: flex;
    margin: 0 10px;
    .pip {
      background: url(${require('@/assets/img/pip.png')});
      :hover {
        background: url(${require('@/assets/img/pip.png')}) 0 -75px;
      }
    }
    .collect {
      background-position: -88px -163px;
      margin: 0 2px;
      :hover {
        background-position: -88px -189px;
      }
    }
    .share {
      background-position: -114px -163px;
      :hover {
        background-position: -114px -189px;
      }
    }
  }
  .right {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 15px;
    background-position: -147px -248px;
    .voice {
      background-position: -2px -248px;
      :hover {
        background-position: -31px -248px;
      }
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
      margin: 0 2px;
      :hover {
        background-position: ${(props) => {
          switch (props.sequence) {
            case 1:
              return '-93px -248px;'
            case 2:
              return '-93px -344px'
            default:
              return '-33px -344px'
          }
        }};
      }
    }
    .playlist {
      width: 60px;
      padding-left: 21px;
      line-height: 25px;
      text-align: center;
      color: #666;
      text-shadow: 0 1px 0 #080707;
      background-position: -42px -68px;
      user-select: none;
      :hover {
        background-position: -42px -98px;
      }
    }
    .hint {
      display: ${(props) => {
        return props.isPlayLength ? 'block' : 'none'
      }};
      position: absolute;
      top: -61px;
      left: 4px;
      width: 153px;
      height: 49px;
      background-position: 0 -287px;
      color: #fff;
      line-height: 35px;
      font-size: 13px;
      text-align: center;
    }
  }
  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`
