import styled from 'styled-components'

export const SongsCoverWrapper = styled.div`
    width: 140px;
    padding-bottom: 25px;
    line-height: 1.5em;
    margin-left: ${props => {
      return props.typesa ? '0': '50px'
    }};
    :nth-child(5n+1) {
      margin-left: 0;
    }
    
    .cover-top {
        position: relative;
        font-size: 14px;
        padding-top: 0;
        &>img {
          width: 140px;
          height: 140px;
        }
        .crown {
          position: absolute;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          z-index: 999;
          background-position: -135px -220px;
        }
        .cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-position: 0 0;
            cursor: pointer;
         }
        .info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background-position: 0 -537px;
            color: #ccc;
            height: 27px;
            font-size: 12px;
            .erji {
              margin-right: 5px;
              display: inline-block;
              width: 14px;
              height: 11px;
              background-position: 0 -24px;
            }

            .play {
              display: inline-block;
              width: 16px;
              height: 17px;

              background-position: 0 0;
              &:hover {
                background-position: 0 -60px;
                cursor: pointer;
              }
            }
          }
    }
    .cover-bottom {
        position: relative;
        font-size: 13px;
        font-weight: 500;
        margin-top: 5px;
        line-height: 1.5em;
        width: 140px;
        .icon {
          display: inline-block;
          width: 35px;
          height: 15px;
          margin-right: 4px;
          background-position: -31px -658px;
        }
        a {
          color: #000;
        }
        .bys {
          display: flex;
          align-items: center;
          margin-top: 2px;
          color: #999;
          font-size: 12px;
          a {
            margin:0 5px 0 5px;
            color: #666;
            max-width: 76%;
          }
          .image {
            width: 13px;
            height: 13px;
          }
        }
  }

  .cover-source {
    color: #666;
    /* background-color: red; */
  }
`