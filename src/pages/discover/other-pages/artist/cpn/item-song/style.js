import styled from 'styled-components'

export const ItemSongWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  .index {
    width: 67px;
    padding: 0 15px;
    color: #999;
  }
  a {
    color: #000;
  }
  .name {
    flex: 1;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding-left: 15px;

    .songtitle {
      color: #999;
    }
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

  .time {
    width: 90px;
    margin-left: 20px;
  }
  .album {
    width: 137px;
    padding-right: 15px;
  }
`
