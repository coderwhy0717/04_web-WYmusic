import styled from 'styled-components'

export const AppYidSearchWarrper = styled.div`
  @media screen and (max-width: 760px) {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 45px;
    line-height: 45px;
    background-color: #281e26;
    padding: 0 10px;
    z-index: 999999;
    display: flex;
    color: #fff;
    .yi-top-search {
      display: block;
      text-align: center;
      flex: 7;
    }
    .yi-home {
      flex: 1;
      font-size: 25px;
      color: #fff;
    }
  }
  display: none;
`
