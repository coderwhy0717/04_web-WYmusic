import styled from 'styled-components'

export const ItemMvWrapper = styled.div`
  width: 159px;
  margin: 20px 0;
  .mv-bgc {
    position: relative;
    width: 159px;
    height: 90px;
    overflow: hidden;
    color: #fff;
    cursor: pointer;
    .top {
      position: absolute;
      top: 0;
      right: 0;
      padding-right: 4px;
      display: flex;
      align-items: center;
      z-index: 1;
      .bgc {
        position: absolute;
        top: 0;
        right: 0;
        width: 90px;
        height: 20px;
        z-index: -1;
        background-position: 0 0;
      }
      .mv-icon {
        margin-right: 3px;
        width: 15px;
        height: 10px;
        background-position: -60px -310px;
      }
    }
    .time {
      position: absolute;
      bottom: 0;
      left: 5px;
      width: 40px;
      background-position: 0 0;
    }
  }
  .title {
    margin-top: 5px;

    .name {
      font-size: 14px;
      display: flex;
      align-items: center;
      a {
        color: #000;
      }
      .mv {
        width: 26px;
        height: 16px;
        margin-right: 3px;
        background-position: -270px -480px;
      }
      .names {
        flex: 1;
      }
    }
  }
  .names {
    .names-item:last-child span {
      display: none;
    }
  }
`
