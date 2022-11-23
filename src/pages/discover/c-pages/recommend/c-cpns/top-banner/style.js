import styled from 'styled-components';

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;
  .banner {
    height: 270px;
    background-color: red;

    display: flex;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  width: 732px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
      cursor: pointer;
    }
  }
`

// export const BannerRight = styled.a.attrs({
//   href: "https://music.163.com/#/download",
//   target: "_blank"
// })`
//   width: 254px;
//   height: 270px;
//   cursor: default;
//   background: url(${require("@/assets/img/download.png")});
//   .hover {
//     display: block;
//     width: 215px;
//     height: 56px;
//     margin: 186px 0 0 19px;
//     text-indent: -9999px;
//     background-position: 0 9999px;
//     :hover {
//       cursor: pointer;
//       background-position: 0 -290px;
      
//    }
//   }
  
// `
export const BannerRight = styled.div`
  width: 254px;
  height: 270px;
  cursor: default;
  background: url(${require("@/assets/img/download.png")});
  .hover {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    text-indent: -9999px;
    background-position: 0 9999px;
    :hover {
      cursor: pointer;
      background-position: 0 -290px;
      
   }
  }
  p {
    font-size: 10px;
    margin: 5px auto;
    text-align: center;
    color: #8d8d8d;
    cursor: text;
  }
  
`

export const BannerControl = styled.div`
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      margin-top: -31px;
     

  .btn {
    position: absolute;
    width: 34px;
    height: 60px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -50px;
    background-position: -2px -360px;
  }

  .right {
    right: -50px;
    background-position: 0 -508px;
  }
`
