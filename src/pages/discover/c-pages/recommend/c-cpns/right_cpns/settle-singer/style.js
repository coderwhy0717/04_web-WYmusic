import styled from 'styled-components'

export const SettleSingerWrapper = styled.div`
    padding: 10px 15px;
    .top-title {
        display: flex;
        justify-content: space-between;
        font-size: 10px;
        height: 23px;
        border-bottom: 1px solid #ccc;
        span {
            color: #000;
            font-weight: 600;
        }
     
    }
    .artists {
        background-color: #fafafa;
        
        img {
            width: 62px;
            height: 62px;
        }
        .item {
            display: flex;
            border: 1px solid #e9e9e9;
            margin: 18px 0 -8px;
            cursor: pointer;
            :hover {
                background-color: #f2f2f2;
            }
            .right {
                width: 133px;
                margin-left: 14px;
                .title {
                    margin-top: 8px;
                    font-size: 12px;
                    font-weight: 700;
                }
                .name {
                    margin-top: 8px;
                    font-size: 10px;
                }
            }
        }
    }
    .btm-link {
        margin-top: 20px;
        text-align: center;

        .link {
            padding: 0 5px 0 0;
            display: block;
            height: 31px;
            line-height: 27px;
            background-position: right -60px;
            border-radius: 4px;
            border: 1px solid #ccc;
            text-decoration: none;
            :hover {
                background-position: right -142px;
            }
            i {
                font-size: 12px;
                width: 170px;
                padding: 0 15px 0 20px;
            }
        }
    }
`