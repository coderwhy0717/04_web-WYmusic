import styled from 'styled-components'

export const FormDetailWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%;

  a {
    color: #000;
  }

  //742px
  .name {
    flex: 1;
    overflow: hidden;
    /* padding-right: 20px; */
    /* flex-wrap: nowrap; */
    display: flex;
    align-items: center;
    .mv {
      min-width: 30px;
      height: 17px;
      margin: 1px 0 0 2px;
      background-position: 0 -151px;
      cursor: pointer;
      :hover {
        background-position: -30px -151px;
      }
    }
  }

  .artist {
    margin-left: 20px;
    width: 162px;
    padding-right: 10px;
    /* .a-link::after {
      content: '/';
    } */
    .box-art:last-child {
      span {
        display: none;
      }
    }
  }
  .album {
    width: 152px;
    padding-right: 10px;
    a {
      color: #666;
    }
  }
  .time {
    width: 50px;
  }
`
