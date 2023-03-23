import styled from 'styled-components'

export const PlayIconWrapper = styled.div`
  .icon {
    width: 17px;
    height: 17px;
    margin-right: 5px;
    cursor: pointer;
    background-position: 0 -103px;
    &:hover {
      background-position: 0 -128px;
    }
  }
  .activeIcon {
    color: red;
    background-position: -20px -128px;
    &:hover {
      background-position: -20px -128px;
    }
  }
`
