import styled from 'styled-components'

export const SearchSongListWarpper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between !important;
  width: 100%;
  padding: 5px 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: #999;
  .img {
    position: relative;
    margin: 0 20px 0 14px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    .bgc {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-position: -160px 0;
    }
  }
  .name {
    flex: 1;
    padding-right: 10px;
    color: #000;
    cursor: pointer;
  }
  .info {
    width: 150px;
  }
  .collect {
    width: 130px;
    padding-left: 40px;
  }
  .listen {
    width: 130px;
    padding-left: 40px;
  }
`
