import styled from 'styled-components'

export const FollowsCoverWrapper = styled.div`
  border: 1px solid #ccc;
  /* border-top: 2px solid #c20c0c; */
  display: flex;
  flex-flow: row wrap;
  .item-cover {
    display: flex;
    width: 50%;
    height: 100px;
    padding: 20px;
    img {
      width: 60px;
      height: 60px;
    }
    .left-follows {
      padding-left: 14px;
      .name {
        max-width: 150px;
        color: #0c73c2;
      }
      a {
      }
    }
  }
  .item-cover {
    border-left: 1px solid #d9d9d9;
  }
  /* .item-cover:nth-last-child(4n - 3) {
    background-color: red;
  } */
  ${(props) =>
    props.sum % 2 === 0
      ? `
  .item-cover:nth-last-child(4n - 3) {
    background-color: #fafafa;
  }
  .item-cover:nth-last-child(4n-2) {
    background-color: #fafafa;
  }
  `
      : `
      .item-cover:nth-last-child(4n + 1) {
        background-color: #fafafa;
      }
      .item-cover:nth-last-child(4n) {
        background-color: #fafafa;
      }
      `}
`
