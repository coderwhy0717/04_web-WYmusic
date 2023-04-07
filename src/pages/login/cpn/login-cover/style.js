import styled from 'styled-components'
// position: absolute;
// top: calc(50% - 240px);
// left: calc(50% - 269px);
export const LoginCoverWrapper = styled.div`
  /* background-color: #f5f5f5; */
  ${(props) =>
    props.showX &&
    `position: absolute;
  top: calc(50% - 212px);
  left: calc(50% - 269px);`}

  .login-box {
    position: relative;
    width: 538px;
    min-height: ${(props) =>
      props.phonePassword || !props.phone ? '364px' : 'auto'};
    /* border: 1px solid rgb(216, 216, 216, 1); */
    /* box-shadow: 0 0 5px 1px rgb(216, 216, 216, 1); */
    margin: 20px auto;
    background-color: #fff;
    border-radius: 5px;
    .code802 {
      text-align: center;
      padding-top: 38px;
      font-size: 14px;
      color: #444;
      .img802 {
        width: 140px;
        height: 140px;
      }
      .sao {
        margin: 15px 0 10px 0;
        font-size: 18px;
      }
    }

    .top {
      display: flex;
      justify-content: center;
      padding-top: 30px;
      img {
        width: 125px;
        height: 220px;
      }
      .saom {
        margin-left: 52px;
        .title-s {
          font-size: 18px;
          text-align: center;
        }
        .ma {
          position: relative;
          width: 146px;
          height: 146px;
          margin: 0 auto;
          overflow: hidden;
          margin-bottom: 35px;
          img {
            width: 155px;
            height: 155px;
          }
          .bgc {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;

            .bgc-bgc {
              width: 146px;
              height: 146px;
              background-color: #fff;
              opacity: 0.9;
            }
            ul {
              position: absolute;
              z-index: 999;
              text-align: center;
              margin-left: 10px;
              margin-top: 10px;
              color: rgba(0, 0, 0, 0.8);
              font-size: 12px;
              .btn {
                margin: 0 auto;
                margin-top: 7px;
                border: 1px solid #5baf5b;
                color: #fff;
                width: 62px;
                padding: 5px 0;
                background: linear-gradient(to bottom, #7fda7f, #5aa75a);
                border-radius: 3px;
                cursor: pointer;
              }
            }
          }
        }
        .link {
          color: #999;
          a {
            color: #0c73c2;
            text-decoration: none;
          }
        }
      }
    }
    .footer {
      position: absolute;
      bottom: 25px;
      left: calc(50% - 60px);
      display: inline-block;
      padding: 8px 10px;
      border: 1px solid #999;
      border-radius: 20px;
      color: #333;
      cursor: pointer;
    }
  }
  /* top登录文字 */
  .login-titles {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: 0;
    padding: 0 18px;
    height: 38px;
    line-height: 38px;
    z-index: 10;
    border: 1px solid #191919;
    border-radius: 5px 5px 0 0;
    background: #2d2d2d;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    .x {
      color: #888888;
    }
  }
  .login-box {
    border-radius: 5px 5px 0 0;

    .conter-box {
      padding: 40px 0 0 59px;
      display: flex;
      .left {
        padding-right: 36px;
        border-right: 1px dotted #ccc;
        img {
          width: 224px;
          height: 120px;
        }
        ul {
          li {
            text-align: center;
            padding: 8px 0;
            border-radius: 5px;
            cursor: pointer;
          }
          .li1 {
            color: #fff;
            margin: 10px 0;
            background-position: 0 -387px;
          }
          .li1:hover {
            background-position: 0 -469px;
          }
          .li2 {
            background: linear-gradient(to bottom, #fefefe, #f1f1f1);
            border: 1px solid #c3c3c3;
          }
          .li2:hover {
            background: linear-gradient(to bottom, #ffffff, #f8f8f8);
            border: 1px solid #c3c3c3;
          }
        }
      }
      .right {
        padding-left: 40px;
      }
    }
    .phone {
      padding-top: 55px;
      ul {
        margin: 20px auto;
        li {
          width: 350px;
          margin: 25px auto;
        }
        .one {
          /* width: 100%; */
          /* text-align: center;  */
          /* text-align: center; */
          .ant-select-single .ant-select-selector {
            border-radius: 20px 0 0 20px !important;
            border-right: none !important;
          }
          .left-phone {
            max-width: 200px !important;
            border-radius: 20px 0 0 20px !important;
          }
          .input-phone {
            min-width: 283px !important;
            border-radius: 0 20px 20px 0 !important;
            border-left: none !important;
          }
        }
        .code {
          display: flex;
          /* align-items: center; */
          /* justify-content: center; */
          font-size: 14px;
          .iput {
            width: 220px !important;
            border-radius: 20px;
          }
          span {
            min-width: 100px;
            margin-left: 10px;
            padding: 10px 25px;
            background-color: #ff3a3a;
            text-align: center;
            color: #fff;
            border-radius: 20px;
            cursor: pointer;
          }
        }
        .login-send {
          margin: 0 auto;
          text-align: center;
          background-color: #ff3a3a;
          height: 36px;
          line-height: 36px;
          border-radius: 20px;
          color: #fff;
          font-size: 14px;
          cursor: pointer;
        }
        .password-link {
          margin-top: 48px;
          color: #666;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
      .phone-footer {
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 18px;
        background-color: #f7f7f7;
        border-top: 1px solid #ccc;
        color: #999;
        p {
          cursor: pointer;
        }
        .left {
          color: #0c73c2;
        }
      }
    }
    /* 其他方式登录 */
    .other {
      .qrcode {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 52px;
        height: 52px;
      }
    }
    /* 手机号 加 密码 登录 */
    #normal_login {
      width: 223px;
      margin: 0 auto;
      .ant-form-item {
        margin-bottom: 10px;
      }
      .ant-form-item-control-input-content {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #666 !important;
        p:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
      .ant-checkbox {
        width: 12px !important;
        height: 12px !important;
        .ant-checkbox-input {
          width: 12px !important;
          height: 12px !important;
        }
        .ant-checkbox-inner:after {
          margin-left: -0.5px;
        }
      }
      .ant-checkbox-wrapper {
        font-size: 12px !important;
        color: #666 !important;
      }
      .ant-checkbox-inner {
        width: 12px !important;
        height: 12px !important;
        border-radius: 2px !important;
      }
      .ant-form-item-control-input {
        min-height: 0 !important;
      }
    }
    .login-form {
    }
    .login-form-button {
      background-position: 0 -387px;
      color: #fff;
      font-size: 12px;
      width: 223px;
      margin-top: 10px;
      transition: none !important;
      &:hover {
        background-position: 0 -469px;
      }
    }
  }
`
