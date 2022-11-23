import styled from 'styled-components'

export const SimilarSongListWrapper = styled.div`
    .item {
        display: flex;
        margin-bottom: 16px;
        img {
            width: 50px;
            height: 50px;
            cursor: pointer;
        }
        .content {
            flex: 1;
            margin-left: 10px;
            .title {
                width: 140px;
                font-family: '幼圆';
                color: #000;
            }
            .by {
                margin-top: 2px;
                span {
                    font-size: 10px;
                    color: #999;
                    margin-right: 4px;
                }
                a {
                    font-size: 12px;

                }
            }
        }
    }

`