import styled from 'styled-components'

export const SearchWrapper = styled.div`
  position: relative;
  /* bag 蒙版 */
  .search-bg {
    display: ${(props) => (props.showbgc ? 'inline-block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
  }
  .search {
    position: relative;
    z-index: ${(props) => (props.showbgc ? '999 !important' : '9 !important')};
    width: 158px;
    height: 32px;
    border-radius: 16px;
    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }
  .lengthInput-box {
    width: 420px;
    height: 40px;
    margin: 0 auto;
    background-position: 0 0;
    display: flex;
    position: relative;
    z-index: ${(props) => (props.showbgc ? '999 !important' : '0 !important')};

    .lengthInput {
      width: 369px;
      height: 36px;
      margin: 2px 2px;
      border: none;
    }
    .clickbtnbgc {
      width: 51px;
      height: 40px;
      border-radius: 0px 5px 5px 0;
      cursor: pointer;
      &:hover {
        background-position: -430px 0;
      }
    }
  }

  .box-search {
    display: ${(props) => (props.showbgc ? 'inline-block' : 'none')};
    position: absolute;

    /* height: 400px; */
    z-index: 9999999999999;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
    ${(props) =>
      props.lengthInput
        ? `top:45px;
          left: 240px;
          width:420px;
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);

        `
        : `top: 40px;
    left: 0;
    width: 240px;`}
    color: #000;

    .top {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #ddd;
      padding-left: 10px;
      display: flex;
      align-items: center;
      .a-link {
        display: flex;
        align-items: center;
        height: 14px;
        &:hover {
          cursor: pointer;
          background-color: #e3e5e7;
          text-decoration: none;
        }
      }
      .top-text {
        max-width: ${(props) => (props.lengthInput ? '290px' : '125px')};
      }
    }
    .center {
      .info1 {
        display: flex;
        .left-1 {
          flex: ${(props) => (props.lengthInput ? '0.4' : '0.9')};
          display: flex;
          align-items: center;
          justify-content: center;
          height: 20px;
          margin-top: 5px;
        }

        .right-1 {
          /* height: 200px; */
          flex: 2.1;
          border: 1px solid #dddd;
          overflow: hidden;
          padding: 3px 0;

          div {
            padding: 0px 10px;
            height: 25px;
            line-height: 25px;
            cursor: pointer;
            &:hover {
              background-color: #e3e5e7;
            }
          }
        }
        .teshu {
          background-color: #f9f8f8;
          border-bottom: none;
          border-top: none;
        }
        .img {
          display: inline-block;
          width: 14px;
          height: 15px;
        }
        .songs {
          background-position: -35px -300px;
        }
        .artists {
          background-position: -50px -300px;
        }
        .albums {
          background-position: -35px -320px;
        }
        .playlists {
          background-position: -50px -320px;
        }
      }
    }
  }
`
