import styled from 'styled-components'

export const FeaturesRankingWrapper = styled.div`
    .title {
        font-family: '新宋体';
        font-weight: 900;
        font-size: 15px;
        margin:30px 0 5px 18px;
        color: #000;
    }
    .item {
        a {
            width: 239px;
            display: flex;
            align-items: center;
            font-size: 12px;
            color: #999;
            cursor: pointer;
            text-decoration: none;
            img {
                width: 40px;
                height: 40px;
                margin: 12px 12px 12px 20px;
                border-radius: 2px;
            }
           .right {
                width:165px;
                .titleb {
                    color: #000;
                    margin-bottom: 4px;
                }
           }
        }
        &:hover {
            background-color: #f1f1f1;
        }
       a.active {
            background-color: #e6e6e6;
        }
       
    }
    
`