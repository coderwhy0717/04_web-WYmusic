import styled from 'styled-components'

export const UserEventWrapper = styled.div`
  background-color: #f5f5f5;
  .box-user-event {
    padding: 40px;
    background-color: #fff;
    margin-top: 5px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
  .conent {
    display: flex;

    .left {
      position: relative;
      flex: 1;
      padding-right: 25px;
      border-right: 2px solid #ddd;
      padding-bottom: 100px;
      .loading {
        position: absolute;
        left: 0;
        right: 20px;
      }
    }
    .right-a {
      width: 250px;
      padding: 16px 0 0 23px;
      .top-Ta {
        font-weight: bold;
        padding-bottom: 8px;
        border-bottom: 1px solid #ddd;
      }
      .ul-six {
        display: flex;
        flex-flow: row wrap;
        margin-left: -17px;
        li {
          margin-top: 18px;
          padding-left: 17px;
          overflow: hidden;
          .name-box {
            width: 64px;
            display: flex;
            align-items: center;
            .name-six {
              max-width: 45px;
              margin-top: 6px;
            }
            .icon-six {
              display: inline-block;
              img {
                width: 13px;
                height: 13px;
                margin-bottom: -3px;
              }
            }
          }
        }
      }
    }
  }
  h2 {
    text-align: center;
    padding: 100px;
    color: #666;
  }
`
