import styled from 'styled-components'

export const AlbumWrapper = styled.div`
    width: ${props => props.width + "px"};

    .album-image {
        position: relative;
        margin-top: 15px;
        img {
            width: ${props => props.size + "px"};
            height: ${props => props.size + "px"};
        }
       .cover {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background-position: 0 ${props => props.bgp};
            text-indent: -9999px;
       }
       :hover .play {
            position: absolute;
            right: 10px;
            bottom: 5px;
            left: 72px;
            width: 22px;
            height: 22px;
            background-position: 0 -85px;
           :hover {
            background-position: 0 -110px;
            cursor: pointer;
           }
       }
    }
    .album-info {
        margin-top: 2px;
        font-size: 13px;
        width: ${props => props.size + "px"};
        .name {
            display: block;
            color: #000;
        }
  }
`