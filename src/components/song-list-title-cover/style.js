import styled from 'styled-components'

export const SongListTitleWrapper = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items:center;
        margin-top: 25px;
        border-bottom: 2px solid #c20c0c;
        padding-bottom: 5px;
        .left {
            display: flex;
            align-items: center;
            h2 {
                font-size: 21px;
                margin-right: 20px;
            }
            span {
                display: inline-block;
                margin-top: 10px;
                color: #333;
            }
        }
        .right {
            display: flex;
            align-items: center;
            .link {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                margin-right: 20px;
                .icon {
                    width: 16px;
                    height: 16px;
                    background-position: -34px -863px;
                }
                a {
                    color: #0c73c2;
                    text-decoration: underline;
                }
            }
            .playcount {
                i {
                    font-weight: 600;
                    color: #c20c0c;
                }
            }
        }
`