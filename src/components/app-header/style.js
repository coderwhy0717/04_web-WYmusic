import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  font-size: 14px;
  color: #fff;
  background-color: #242424;

  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
    background-color: #242424;
  }
  /*  */
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  .select-list {
    display: flex;
    line-height: 70px;

    .select-item {
      position: relative;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${require('@/assets/img/sprite_01.png')});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a,
      a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`
export const HeaderRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .creation {
    margin: 0 10px;
    padding: 8px 15px;
    border: 0.5px solid #4f4f4f;
    border-radius: 16px;
    font-size: 12px;
    transition: all 500ms ease;
    a {
      color: #c9c9c9;
      text-decoration: none;
    }

    &:hover {
      /* border: 0.5px solid #fff; */
      box-shadow: 0 0 2px 1px #fff;
      cursor: pointer;
    }
  }
  .info {
    position: relative;
    z-index: 1;
    margin-left: 10px;
    margin-top: 20px;
    padding: 0 0px 20px 0;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    /* msg-icon */
    .img_msg {
      display: ${(props) => (props.MsgIcon ? 'inline-block' : 'none')};
      position: absolute;
      top: -5px;
      right: -6px;
    }
    .msg_index1 {
      display: none;
      margin: -2px 0 0 10px;
    }
    .msg_icon {
      min-width: 17px;
      height: 17px;
      padding: 0 4px;
      box-sizing: border-box;
      background: #c20c0c;
      border-radius: 18px;
      border: 1px solid #242424;
      line-height: 16px;
      font-size: 12px;
      white-space: nowrap;
      color: #fff;
      text-align: center;
    }
    .btn-info {
      display: none;
      position: absolute;
      top: 38px;
      left: -60px;
      width: 160px;
      background-color: #2b2b2b;
      border-radius: 3px;
      overflow: hidden;
      box-shadow: 0 4px 10px 5px rgb(0, 0, 0, 0.4);
      .infoac {
        display: flex;
        align-items: center;
        padding-left: 25px;
        height: 34px;
        line-height: 34px;
        cursor: pointer;
        .left_icon {
          text-align: center;
          margin-top: -2px;
          width: 18px;
          height: 18px;
          margin-right: 10px;
        }
        &:hover {
          background-color: #353535;
          color: #fff;
        }
      }
      .ul_gang {
        border-top: 2px solid #232323;
        border-bottom: 2px solid #232323;
      }

      .out_go {
        background-position: 0 -200px;
      }
      .info0 {
        background-position: 0 -80px;
      }
      .info1 {
        background-position: -20px -120px;
      }
      .info2 {
        background-position: 0 -100px;
      }
      .info3 {
        background-position: 0 -219px;
      }
      .conter0 {
        background-position: 0 -139px;
      }
      .conter1 {
        background-position: -20px -142px;
      }
    }
    /* 画三角形 */
    .sanj {
      display: none;
      position: absolute;
      top: 35px;
      left: 10px;
      background-color: #fff;
      border: 6px solid black;
      border-right-color: #2b2b2b;
      border-top-color: #2b2b2b;
      transform: rotate(-45deg);
    }

    &:hover {
      .btn-info {
        display: inline-block;
      }
      .sanj {
        display: inline-block;
      }
      .img_msg {
        display: none;
      }
      .msg_index1 {
        display: ${(props) => (props.MsgIcon ? 'inline-block' : 'none')};
      }
    }
  }

  .login {
    margin-left: 10px;
    &:hover a {
      color: #aaa;
    }
  }
`
