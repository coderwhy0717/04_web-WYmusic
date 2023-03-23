import styled from 'styled-components'

export const ArtistWrapper = styled.div`
  display: flex;
  width: 980px;
  border-right: 1px solid #ccc;
  background: url(${require('@/assets/img/wrap-bg.png')});

  .left {
    padding: 20px 30px 40px 39px;
    flex: 1;
    overflow: hidden;
    display: ${(props) => {
      return props.err ? 'block' : 'none'
    }};
    .top-title {
      display: flex;
      overflow: hidden;
      h1 {
        margin-right: 8px;
      }
      div {
        line-height: 50px;
        color: #999;
        font-size: 14px;
      }
      div:last-child span {
        display: none;
      }
    }
    .img-box {
      position: relative;
      width: 640px;
      height: 300px;
      /* box-shadow: 0 -1px 1px 1px rgba(192, 191, 191, 1); */
      overflow: hidden;
      border: 1px solid #ccccca;
      .bgc {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 0 80px 40px rgba(0, 0, 0, 0.8);
      }
      .user-home {
        position: absolute;
        bottom: 18px;
        right: 116px;
        width: 96px;
        height: 32px;
        background-position: 0 -1156px;
      }
      .user-home:hover {
        background-position: 0 -1196px;
      }
      .collect {
        display: block;
        position: absolute;
        bottom: 18px;
        right: 20px;
        width: 76px;
        height: 32px;
        background-position: 0 -500px;
        cursor: pointer;
      }
      .collect:hover {
        background-position: 0 -540px;
      }
    }

    .btns {
      display: flex;
      font-size: 14px;
      width: 100%;
      background-color: #f7f7f7;
      overflow: hidden;
      /* border: 1px solid #ccccca; */
      border-top: none;
      margin-top: -1px;
      user-select: none;
      padding: 0 1px;
      .itemdiv:first-of-type {
        border-left: 1px solid #ccccca;
      }
      .itemdiv {
        position: relative;
        z-index: 9;
        width: 136px;
        height: 39px;
        text-align: center;
        line-height: 39px;
        border-top: 3px solid #111111;
        border-bottom: 1px solid #ccccca;
        cursor: pointer;
        :hover {
          border-top: 3px solid #d13030;
        }
      }
      .div {
        position: relative;
        z-index: 9;
        flex: 1;
        border-top: 3px solid #111111;
        border-right: 1px solid #ccccca;
        border-bottom: 1px solid #ccccca;
      }
    }
    .activebtn {
      background-color: #fff;
      border-top: 3px solid #d13030 !important;
      border-left: 1px solid #ccccca !important;
      border-right: 1px solid #ccccca !important;
      border-bottom: none !important;
    }
  }
  .right {
    width: 270px;
    padding: 20px 40px 40px 30px;
  }
  .hot-song {
    .top-btn {
      display: flex;
      align-items: center;
      width: 100%;
      margin: 20px 0 10px 0;
      .leftb {
        flex: 1;
        display: flex;
        align-items: center;
        .play {
          height: 31px;
          display: flex;
          align-items: center;
          color: #fff;
          user-select: none;
          cursor: pointer;

          .p-text {
            min-width: 23px;
            line-height: 31px;
            padding-left: 34px;
            padding-right: 12px;
            background-position: -1px -633px;
            &:hover {
              background-position: -1px -719px;
            }
          }
          .p-icon {
            min-width: 31px;
            height: 31px;
            line-height: 31px;
            padding: 0 12px;
            background-position: -1px -1588px;
            &:hover {
              background-position: -41px -1588px;
            }
          }
        }
        .collect {
          min-width: 23px;
          height: 31px;
          line-height: 31px;
          margin-right: 5px;
          border: 1px solid #bababa;
          border-bottom: none;
          border-top: none;
          border-radius: 4px;
          padding-left: 30px;
          padding-right: 6px;
          cursor: pointer;
          user-select: none;
          margin-left: 5px;
          background-position: -1px -977px;
          &:hover {
            background-position: -1px -1063px;
          }
        }
      }
      .righb {
        min-width: 23px;
        height: 31px;
        line-height: 31px;
        margin-right: 5px;
        border: 1px solid #bababa;
        border-bottom: none;
        border-top: none;
        border-radius: 4px;
        padding: 0 25px;
        cursor: pointer;
        user-select: none;
        margin-left: 5px;
        background-position: -1px -305px;
        &:hover {
          background-position: -1px -223px;
        }
      }
    }
  }
  .all-album {
    display: flex;
    flex-flow: row wrap;
    margin-left: -8px;
    .item-album {
      margin: 5px 0 10px 8px;
    }
  }
  .footer-p {
    width: 100%;
    text-align: center;
    margin: 30px 0;
  }
  .all-mv {
    .mv-box {
      display: flex;
      flex-flow: row wrap;
      margin-left: -30px;
      .mv-item {
        margin: 20px 0 20px 30px;
      }
    }
  }
  .artist-info {
    .top-text {
      .title {
        margin: 30px 0 8px 0;
        font-weight: 600;
        display: flex;
        align-items: center;
        font-size: 14px;
        .bgc {
          width: 4px;
          height: 16px;
          background-color: #c10d0c;
          margin-right: 6px;
        }
      }
      .text {
        text-indent: 2em;
        line-height: 25px;
        color: #666;
      }
      .text-i {
        line-height: 25px;
        color: #666;
      }
    }
  }
  .pre {
    white-space: pre-line;
  }
`
