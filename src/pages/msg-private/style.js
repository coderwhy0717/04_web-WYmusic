import styled from 'styled-components'

export const MsgPrivateWrapper = styled.div`
  background-color: #f5f5f5;

  .msg_private {
    display: flex;
    margin-top: 5px;
    background-color: #fff;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    .left {
      width: 185px;
      background-color: #f7f7f7;
      background: linear-gradient(to bottom, #f9f9f9, #f7f7f7);
      .msg_index1 {
        display: inline-block;
        margin: -2px 0 0 10px;
      }
      .msg_icon {
        min-width: 15px;
        height: 15px;
        padding: 0 4px;
        box-sizing: border-box;
        background: #d93131;
        border-radius: 18px;
        line-height: 16px;
        font-size: 12px;
        white-space: nowrap;
        color: #fff;
        font-weight: bold;
        text-align: center;
      }
      .title {
        padding: 32px 0 14px 40px;
        font-size: 20px;
        font-weight: normal;
        line-height: 30px;
        border-right: 1px solid #d3d3d3;
      }

      ul {
        a {
          color: #333;
          display: flex;
          align-items: center;
          height: 53px;
          line-height: 53px;
          padding-left: 40px;
          background: #f7f7f7;
          border-top: 1px solid #ddd;
          border-right: 1px solid #d3d3d3;
          cursor: pointer;
          text-decoration: none;
          .msg_me-icon {
            width: 22px;
            height: 21px;
            margin-right: 10px;
          }
          .t_icon0 {
            background-position: -64px -164px;
          }
          .t_icon1 {
            background-position: -64px -193px;
          }
          .t_icon2 {
            background-position: -64px -245px;
          }
          .t_icon3 {
            background-position: -58px -400px;
          }
          &:hover {
            background-color: #fff;
          }
          &.active {
            background-color: #fff;
            border-right: 1px solid #fff;
            /* 活跃的就 去掉红标数 */
            .s {
              display: none;
            }
          }
        }
      }
      a:last-child {
        border-bottom: 1px solid #ddd;
      }
      .read {
        width: 100%;
        /* height: 100vh; */
        background-color: #fff;
        padding-top: 25px;
        border-right: 1px solid #d3d3d3;
        p {
          text-align: center;
          width: 112px;
          height: 28px;
          line-height: 28px;
          background-color: #fff;
          border: 1px solid #d3d3d3;
          border-radius: 20px;
          margin: 0 auto;
          color: #333;
        }
      }
    }
    .right {
      padding-top: 45px;
      flex: 1;
      .top-name {
        margin: 0 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        font-weight: bold;
        padding-bottom: 8px;
        border-bottom: 2px solid #d13030;
        color: #333;
        .rome {
          font-size: 12px;
          height: 20px;
          color: #999;
          display: flex;
          align-items: center;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
          .shan {
            width: 13px;
            height: 14px;
            background-position: 0 -284px;
            margin-right: 5px;
            &:hover {
              background-position: -20px -284px;
            }
          }
        }
      }
    }
  }
`
