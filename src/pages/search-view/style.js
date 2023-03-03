import styled from 'styled-components'

export const SearchViewWrapper = styled.div`
  background-color: #f5f5f5;
  .box {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    margin-top: 5px;
    background-color: #fff;
    padding: 40px;
    .search-title {
      color: #9999a6;
      margin: 28px 0 17px;
      .name {
        /* 强制换行 */
        word-wrap: break-word;
      }
      .number {
        color: #c20c0c;
        font-size: 13px;
      }
    }
    .form {
      .active {
        border-top: 3px solid #c20c0c !important;
        border-left: 1px solid #cccccc !important;
        border-right: 1px solid #cccccc !important;
        border-bottom: none !important;
        background-color: #fff;
      }
      .form-head {
        display: flex;
        width: 100%;
        align-items: center;
        font-size: 14px;
        font-family: '微软雅黑';
        user-select: none;
        background-color: #f8f8f8;
        border-left: 1px solid #cccccc;
        border-right: 1px solid #cccccc;
        .text-btn {
          border: 1px solid #cccccc;
          border-top: 3px solid #cccccc;
          border-left: none;
          border-right: none;
          width: 112.2px;
          height: 39px;
          line-height: 39px;
          text-align: center;
          &:hover {
            cursor: pointer;
            border-top: 3px solid #c20c0c !important;
          }
        }
      }
    }
    .songs-message {
      height: 500px;
      width: 100%;
    }
  }
`
