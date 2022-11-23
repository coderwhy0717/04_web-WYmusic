import styled from 'styled-components'

export const SimilarSongWrapper = styled.div`
    margin-bottom: 25px;
    .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        .left {
            flex: 1;
            font-size: 12px;
            .title {
                color: #333;
            }
            .name {
                font-size: 10px;
                .artists {
                    a {
                    color: #999;
                    }
                    :last-child span {
                        display: none;
                    }
                }
            }   
        }
        .right {
            width: 50px;
            text-align: right;
            
            .play {
                margin-right: 16px;
                width: 10px;
                height: 11px;
                background-position: -69px -455px;
                cursor: pointer;
            }
            .join {
                width: 10px;
                height: 11px;
                background-position: -87px -454px;
                cursor: pointer;
            }
        }
    }
`