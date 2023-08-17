import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  /* 移动端 */
  @media screen and (max-width: 760px) {
    margin-top: 45px;
    .tup {
      display: none;
    }
  }
  /* pc端 */
  .tup {
    height: 30px !important;
    background-color: #c20c0c;
  }
`

export const TopMenu = styled.div`
  display: flex;
  padding-left: 180px;
  background-color: #c20c0c;
  .item {
    font-size: 12px;
    padding-bottom: 3px;

    a {
      position: relative;
      top: -2px;
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 13px;
      margin: 7px 17px 0;
      color: #fff;

      &:hover,
      &.active {
        text-decoration: none;
        background-color: #9b0909;
        border-radius: 20px;
      }
    }
  }
`
