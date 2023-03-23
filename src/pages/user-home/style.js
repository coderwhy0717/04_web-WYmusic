import styled from 'styled-components'

export const ArtistDetailWrapper = styled.div`
  background-color: #f5f5f5;
  .box-user-home {
    padding: 40px;
    background-color: #fff;
    margin-top: 5px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
  .user-info {
    display: flex;
    margin-bottom: 40px;

    .image-div {
      width: 188px;
      height: 188px;
      border: 1px solid #ddd;
      text-align: center;
      line-height: 185px;
      margin-right: 35px;
      .image {
        width: 180px;
        height: 180px;
      }
      .ant-image-mask {
        top: 3px;
        bottom: -3px;
      }
    }
    .user-title {
      flex: 1;
      .box {
        border-bottom: 1px solid #ddd;
        .rz {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: #666;
          .icon {
            width: 68px;
            height: 20px;
            margin-right: 5px;
          }

          .icon2 {
            background-position: 0 -480px;
          }
          .icon4 {
            background-position: -150px -480px;
          }
          .icon207 {
            background-position: -75px -480px;
          }
          .i-tabel {
            height: 16px;
            margin-left: 10px;
            padding: 0 2px;
            color: rgba(0, 0, 0, 0.4);
            font-size: 12px;
            line-height: 16px;
            text-align: center;
            border: solid 1px rgba(0, 0, 0, 0.3);
            border-radius: 2px;
          }

          .text-title span:nth-last-child(2) i {
            display: none;
          }
          .text-title span:nth-last-child(1) i {
            display: none;
          }
        }

        .rz:last-child {
          .icon {
            margin: 5px 6px 10px 0;
          }
          .text-title {
            margin: 5px 5px 10px 0;
          }
          .title-rz {
            margin: 5px 5px 10px 0;
          }
        }
        /* .rz:first-of-type {
          .icon {
            margin: 0 5px 10px 0;
          }
          .text-title {
            margin: 0 5px 10px 0;
          }
        } */
      }

      .title {
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 2px;
        .Lv {
          display: flex;
          margin: 0 10px;
          height: 19px;
          overflow: hidden;
          padding-left: 29px;
          line-height: 21px;
          color: #e03a24;
          font-size: 14px;
          font-weight: bold;
          font-style: italic;
          background-position: -135px -190px;
        }
        .lvf {
          width: 9px;
          height: 19px;
          margin-left: 2px;
          background-position: -191px -190px;
        }
        .biao {
          display: ${(props) => (props.gender === 0 ? 'none' : 'inline-block')};
          width: 20px;
          height: 20px;
          ${(props) =>
            props.gender === 1 && 'background-position: -41px -57px;'}
          ${(props) =>
            props.gender === 2 && 'background-position: -41px -27px;'}
        }
        .name {
          font-size: 22px;
        }
        img {
        }
        .btn {
          width: 75px;
          height: 31px;
          margin-left: 15px;
          border-radius: 3px;
          cursor: pointer;
        }
        .btna {
          padding-left: 25px;
          background-position: 0 -810px;
        }
        .btna:hover {
          background-position: 0 -845px;
        }
        .btnb {
          padding-left: 15px;
          background-position: 0 -720px;
          color: #fff;
        }
        .btnb:hover {
          background-position: -80px -720px;
        }
        .navto {
          position: absolute;
          right: 0;
          width: 100px;
          text-align: center;
          height: 31px;
          line-height: 31px;
          color: #333;
          background-position: 0 -59px;
          border-right: 2px solid #ddd;
          border-radius: 5px;
        }
        .navto:hover {
          background-position: 0 -141px;
        }
        a {
          text-decoration: none;
        }
      }
      .count {
        display: flex;
        margin-top: 10px;
        margin-left: -20px;
        a:hover {
          color: #0c73c2;
          cursor: pointer;
          text-decoration: none;
        }
        > div {
          padding: 0 40px 0 20px;
          height: 40px;
          line-height: 15px;
          border-right: 1px solid #d5d5d5;
          overflow: hidden;
          color: #666;

          div {
            padding: 5px 0 7px 0;
            font-size: 24px;
          }
        }
        div:last-child {
          border-right: none;
        }
      }
      .info {
        margin-top: 20px;
        color: #666;
        li {
          margin: 8px 0;
          .age {
            margin-left: 26px;
          }
        }
      }
      .social {
        color: #666;
        display: flex;
        align-items: center;
        a {
          width: 20px;
          height: 20px;
        }
        .wb {
          background-position: 0 0;
        }
        .kon {
          display: none;
        }
      }
    }
  }
`
