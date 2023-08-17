import styled from 'styled-components'

export const PrivateItemWarpper = styled.div`
  margin: 0 20px;
  padding: 0 20px;
  &:hover {
    background: #f5f5f5;

    .private-item-box {
      border-bottom: 1px solid #f5f5f5;
    }
    .remoe {
      display: inline-block !important;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .private-item-box {
    display: flex;
    padding: 20px 0;
    cursor: pointer;
    border-bottom: 1px dotted #ccc;

    /* background: #666; */
    .p-img {
      position: relative;
      width: 50px;
      height: 50px;
      /* 红点提示 */
      .msg_index1 {
        position: absolute;
        top: -5px;
        left: -16px;
        display: inline-block;
        margin: -2px 0 0 10px;
      }
      .msg_icon {
        min-width: 18px;
        height: 18px;
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
        border: 2px solid #fff;
      }
    }
    .p-conent {
      flex: 1;
      margin-left: 20px;
      .pc-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        .name {
          display: flex;
          align-items: center;
          .a {
            font-size: 14px;
            font-weight: bold;
            color: #333;
            &:hover {
              text-decoration: underline;
            }
          }

          .img-icon {
            width: 15px;
            height: 15px;
            margin-left: 2px;
          }
        }
        .p-time {
          display: flex;
          .time {
            color: #999;
            margin-right: 5px;
          }
          .time-icon {
            width: 13px;
            height: 13px;
            background-position: -18px -682px;
          }
        }
      }
      .box-textd {
        position: relative;
        display: flex;
        justify-content: space-between;
        .p-c-text {
          width: 548px;
          color: #999;
          line-height: 21px;
        }
        .remoe {
          position: absolute;
          right: 0;
          display: none;
          color: #0c87d1;
        }
      }
    }
  }
`
