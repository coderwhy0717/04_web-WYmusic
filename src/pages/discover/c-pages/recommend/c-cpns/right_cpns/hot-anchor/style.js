import styled from 'styled-components'

export const HotAnchorWrapper = styled.div`
    padding: 10px 15px;
    .top-title {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        height: 23px;
        border-bottom: 1px solid #ccc;
        span {
            color: #000;
            font-weight: 600;
        }
    }
    .artists {
        img {
            width: 40px;
            height: 40px;
            cursor: pointer;
        }
        .item {
            display: flex;
            margin: 15px 0 -9px;
            .right {
                width: 133px;
                margin-left: 10px;
                .title {
                    font-size: 11px;
                    color: #000;
                }
                .name {
                    font-size: 12px;
                    color: #666;
                }
            }
        }
    }
    
`