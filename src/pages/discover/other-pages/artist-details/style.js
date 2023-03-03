import styled from 'styled-components'

export const ArtistDetailWrapper = styled.div`
  background-color: #ccc;
  height: 100vh;
  padding: 40px;
  margin-top: 5px;
  .user-info {
    display: flex;
    .image-div {
      width: 188px;
      height: 188px;
      border: 1px solid #eee;
      text-align: center;
      line-height: 183px;
      margin-right: 35px;
      .image {
        width: 180px;
        height: 180px;
      }
    }
    .user-title {
      .title {
        display: flex;
        align-items: center;
        .name {
          font-size: 22px;
        }
        img {
        }
        .btn {
          width: 75px;
          height: 31px;
          margin-left: 20px;
          border: 1px solid #000;
          border-radius: 3px;
        }
        .btnb {
        }
      }
    }
  }
`
