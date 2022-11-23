import styled from 'styled-components'

export const RankingTopTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 40px;
    .image {
        position: relative;
        border: 1px solid #ccc;
        padding: 3px 3px;
        img {
            width: 150px;
            height: 150px;
        }
        .cover {
            position: absolute;
            left: 0;
            top: 0;
            width: 150px;
            height: 150px;
            background-position: -230px -380px;
        }
    }
    .right {
        margin-left: 30px;
        .title-top {
            font-size: 12px;
            color: #666;
            .title {
                font-family: '幼圆';
                color: #333;
                font-size: 20px;
                margin-bottom: 9px;
            }
            .time {
                margin: 0 0 30px 3px;
                .spana {
                    position: relative;
                    bottom: -1px;
                    display: inline-block;
                    width: 15px;
                    height: 13px;
                    background-position: -18px -682px;
                }
                .update {
                    color: #999;
                }
            }
        }
    }
`