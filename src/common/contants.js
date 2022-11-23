// 推荐歌单
export const HOT_RECOMMEND_LIMIT = 8
// 新碟上架
export const NEW_ALBUM = 10

// 入住歌手
export const SETTLE_SINGER = 5
// 链接api
export const realIp = '116.25.146.177'


// 新碟上新轮播图播放的速度
export const SETTINGS = {
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear"
 }

//  
// {
//     item.artists.map((iten,inden) => {
//       return (
//         <span className='artists' key={iten.id}>
//           <a href='/#'>{iten.name}</a>
//           {
//             item.artists.length > 1 ? <span>/</span> : ''
//           }
//         </span>
//       )
//     })
//   }

//   .artists {
//     :last-child span {
//         display: none;
//     }
// }