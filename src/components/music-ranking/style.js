import styled from 'styled-components'

export const MusicRankingWrapper = styled.div`
    flex: 1;
    .top {
        display: flex;
        padding: 21px 0 0 19px;
        .image {
            width: 80px;
            height: 80px;
            position: relative;
            cursor: pointer;
            img {
                width: 80px;
                height: 80px;
            }
        }
        .top-right {
            margin: 6px 0 0 10px;
            height: 94px ;

            a {
                color: #333;
                font-weight: 600;

            }
            .aorrw {
                display: inline-block;
                width: 22px;
                height: 22px;
                margin: 8px 10px 0 0;
                cursor: pointer;
                text-indent: -9999px;

            }
            .play {
                background-position: -267px -205px;
                :hover {
                    background-position: -267px -235px;
                }
            }
            .store {
                background-position: -300px -205px;
                :hover {
                    background-position: -300px -235px;
                }
            }
        }
    }
    
    .list {
        .info {
            position: relative;
            display: flex;
            align-items: center;
            height: 32px;
            :nth-child(-n+3) .rank {
                color: #c10d0c;
            }
            .rank {
                width: 35px;
                text-align: center;
                margin-left: 10px;
                font-size: 16px;
                
            }
            .item {
                width: 180px;
                height: 17px;
                line-height: 17px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                a {
                    flex: 1;
                    font-size: 12px;
                    color: #000;

                }
                .btn {
                    display: flex;
                    align-items: center;
                    display: none;
                    width: 82px;
                   .play {
                       background-position: -267px -268px;
                       :hover {
                        background-position: -267px -288px;
                       }
                   }
                   .play-store {
                        position: relative;
                        top: 2px;
                        background-position: 0 -700px;
                        :hover {
                            background-position: -22px -700px;
                        }
                   }
                   .store {
                        background-position: -297px -268px;
                        :hover {
                            background-position: -297px -288px;
                        }

                   }
                   .aorrw {
                       width: 17px;
                       height: 17px;
                       margin-left: 8px;
                       cursor: pointer;
                   }
                }
            }
            &:hover {
                .btn {
                    display: block;
                }
            }
        }
    }
    .footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 32px;
        font-size: 12px;
        height: 32px;
        a {
            color: #000;
        }
    }
`