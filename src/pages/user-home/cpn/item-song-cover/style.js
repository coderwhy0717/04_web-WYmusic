import styled from 'styled-components'

export const ItemSongCoverWrapper = styled.div`
  .item-song-box {
    display: flex;
    align-items: center;
    .left {
      flex: 1;
      display: flex;
      align-items: center;
      .index {
        width: 41px;
        margin-right: 14px;
        text-align: right;
        font-size: 16px;
        color: #666;
      }
      .text {
        width: 500px;
        display: flex;
        align-items: center;
      }
      .songname {
        margin-left: 5px;
        color: #333;
        font-weight: bold;
      }
      .name {
        min-width: 160px;
        color: #b2b2b2;
        font-weight: 600;
        a {
          color: #b2b2b2;
        }
      }
      .name span::after {
        content: ' / ';
      }
      .name span:last-child::after {
        content: '';
      }
    }
    /* 右边的color */
    .right {
      position: relative;
      width: 320px;
      min-height: 39px;
      .bg {
        width: ${(props) => props.score + '%' ?? '0%'};
        height: 39px;
        background-color: #edf7fe;
      }
      .playCount {
        position: absolute;
        top: calc(50% - 5px);
        left: 10px;
        z-index: 999;
        color: #666;
      }
    }

    /* 鼠标放上去这个色 */
    &:hover {
      background-color: #e6e6e6 !important;
      .bg {
        background-color: #d7e1e8 !important;
      }
    }
  }
  /* 偶数这个色  */
  .bgc {
    background-color: #f7f7f7;
    .bg {
      background-color: #e6f0f7 !important;
    }
  }
`
