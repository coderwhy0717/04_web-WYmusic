import styled from 'styled-components'

export const LoginWrapper = styled.div`
  background-color: #f5f5f5;
  .login {
    height: 130vh;
    margin-top: 5px;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    background-color: #fafafa;
    .title {
      text-align: center;
      padding-top: 70px;
      font-size: 22px;
      font-weight: 600;
    }
    .login-box {
      position: relative;
      width: 538px;
      min-height: 364px;
      border: 1px solid rgb(216, 216, 216, 1);
      box-shadow: 0 0 5px 1px rgb(216, 216, 216, 1);
      margin: 20px auto;
      background-color: #fff;
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
  }
  /* top登录文字 */
  .login-titles {
    position: relative;
    margin: 0;
    padding: 0 45px 0 18px;
    height: 38px;
    line-height: 38px;
    z-index: 10;
    border: 1px solid #191919;
    border-radius: 5px 5px 0 0;
    background: #2d2d2d;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
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
      ul {
        margin: 20px auto;
        li {
          width: 400px;
          margin: 18px auto;
        }
        .code {
          display: flex;
          align-items: center;
          span {
            width: 100px;
          }
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
  }
`
