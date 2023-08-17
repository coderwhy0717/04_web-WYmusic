import styled from 'styled-components'

export const SongsRankWrapper = styled.div`
  .songs-box {
    .songs-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #444;
      padding-bottom: 5px;
      border-bottom: 2px solid #c20c0c;
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
      .left {
        display: flex;
        align-items: center;
        color: #666;
        p {
          font-size: 20px;
        }
        span {
          display: inline-block;
          margin: 5px 10px 0;
        }
        i {
          color: #666;
          margin-top: 5px;
          font-weight: bold;
          border: 1px solid #999;
          padding: 0 6px;
          border-radius: 50%;
          height: 17px;
          line-height: 17px;
          text-align: center;
          cursor: pointer;
        }
        i:hover {
          background-color: rgba(246, 246, 246);
        }
      }
      .right {
        span {
          cursor: pointer;
        }
        .week {
          color: #000;
          font-weight: 700;
        }
        i {
          margin: 0 8px;
        }
      }
    }
    .songs {
      border: 1px solid #ddd;
    }
    .null-rank {
      width: 100%;
      height: 250px;
      line-height: 250px;
      margin: 0 auto;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      .null-img-text {
        position: relative;
        top: 20px;
        display: inline-block;
        width: 64px;
        height: 50px;
        margin-right: 10px;
        background-position: 0 -347px;
      }
    }
    .look {
      text-align: right;
      margin: 5px 0 50px;
    }
  }
  .example {
    margin: 20px 0;
    margin-bottom: 20px;
    padding: 30px 50px;
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
`
