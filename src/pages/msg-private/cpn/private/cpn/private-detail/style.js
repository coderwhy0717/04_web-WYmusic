import styled from 'styled-components'

export const PrivateConentWrapper = styled.div`
  width: 100%;
  .private-conent {
    padding: 0 0 40px 40px;
    height: 493px;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 8px;
      background-color: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background: #e9e9e9;
      border-radius: 10px;
      &:hover {
        background: #d9d9d9;
      }
    }
  }
  .footer-chat {
    position: relative;
    z-index: 999;
    box-shadow: 0 -1px rgba(242, 242, 242, 1);
    padding: 18px 40px 20px;
    background-color: #fcfcfc;
    .chat-footer-btn {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .x {
        cursor: pointer;
        width: 18px;
        height: 18px;
        margin-right: 10px;
        background-position: -40px -490px;
        &:hover {
          background-position: -40px -490px;
        }
      }
      .send-btn {
        display: flex;
        align-items: center;
        .number {
          color: #999;
          margin-right: 12px;
        }
        .btn-h {
          width: 46px;
          height: 24px;
          color: #fff;
          text-align: center;
          line-height: 24px;
          border-radius: 3px;
          background: linear-gradient(to bottom, #4999dd, #1e76c3);
          cursor: pointer;
          &:hover {
            background: linear-gradient(to bottom, #63aceb, #3685d0);
          }
        }
      }
    }
  }
`
