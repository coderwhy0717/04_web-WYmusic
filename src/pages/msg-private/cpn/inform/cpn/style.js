import styled from 'styled-components'

export const InformItemWrapper = styled.div`
  padding: 0 20px;
  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
    .inform-box {
      border-bottom: 1px dotted #f5f5f5;
    }
  }
  .inform-box {
    padding: 18px 0;
    display: flex;
    border-bottom: 1px dotted #ccc;
    .a-img {
      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
      }
      margin-right: 20px;
    }
    .conent {
      flex: 1;
      .name-time {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
        .name {
          .nikname {
            color: #000;
            font-weight: bold;
          }
          .good {
            color: #999999;
          }
        }
        .time {
          display: flex;
          .time-text {
            color: #999;
            margin-right: 6px;
          }
          .time-icon {
            width: 13px;
            height: 13px;
            background-position: -18px -682px;
          }
        }
      }
      .text {
        display: inline-block;
        width: 80%;
        word-break: break-word;
        color: #666;
        line-height: 1.5em;
      }
    }
  }
`
