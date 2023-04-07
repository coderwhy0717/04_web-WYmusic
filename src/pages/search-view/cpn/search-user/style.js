import styled from 'styled-components'

export const SearchUserWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  color: #999;
  width: 100%;
  .user-img {
    position: relative;
    width: 50px;
    height: 50px;
    .bgc {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-position: -160px 0;
    }
  }
  .user-name {
    width: 57%;
    padding: 0 20px;
    .name {
      font-size: 14px;
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      .namet {
        max-width: 70%;
        color: #000;
      }
      .biao {
        display: ${(props) => (props.gender === 0 ? 'none' : 'inline-block')};
        margin-left: 5px;
        width: 14px;
        height: 15px;
        ${(props) => props.gender === 1 && 'background-position: -70px -20px;'}
        ${(props) => props.gender === 2 && 'background-position: -70px 0 ;'}
      }
      .img-icon {
        width: 15px;
        height: 15px;
        margin-left: 3px;
      }
    }
  }
  .gz {
    width: 100px;
    color: #000;
    cursor: pointer;
  }
  .songlist {
    width: 100px;
  }
  .fans {
    width: 100px;
  }
`
