import styled from 'styled-components'

export const MeItemWrapper = styled.div`
  position: relative;
  display: flex;
  border-bottom: 1px dotted #ddd;
  margin-top: 17px;
  .red_dian {
    position: absolute;
    left: -15px;
    top: 20px;
    width: 6px;
    height: 6px;
    background-color: #d53130;
    border-radius: 50%;
  }
  .conent {
    flex: 1;
    margin-left: 20px;
    font-size: 14px;
    color: #666666;
    .title-id-time {
      display: flex;
      justify-content: space-between;
      margin-top: 2px;
      .name-t {
        color: #0c75c2;
      }
      a {
        font-size: 12px;
        color: #999;
      }
      p {
        a {
          font-size: 14px;
        }
      }
    }
    .uid-conent {
      margin: 14px 0 8px 0;
      .uid-name {
        color: #0c73c2;
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
      .uid-text {
        color: #222;
      }
    }
    .music-conent {
      display: flex;
      align-items: center;
      padding: 10px 8px;
      background-color: #f5f5f5;
      .music-play {
        position: relative;
        img {
          width: 40px;
          height: 40px;
          object-fit: cover;
        }
        .play {
          position: absolute;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          margin: 0;
          background-position: -100px -70px;
          opacity: 0.8;
          cursor: pointer;
          &:hover {
            opacity: 1;
          }
        }
      }
      a {
        color: #333;
        margin-top: 5px;
      }
      .music-t {
        margin-left: 10px;
        .artists {
          margin-top: 6px;
          .ar-a {
            font-size: 12px;
            a {
              color: #666666;
            }
            i:last-child {
              display: none;
            }
          }
        }
      }
    }
    .btn-footer {
      display: flex;
      align-items: center;
      justify-content: right;
      margin: 20px 0 15px 0;
      color: #0c73c2;
      font-size: 12px;
      a {
        color: #0c73c2;
      }
      span {
        color: #ccc;
        margin: 0 10px;
      }
      i:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`
