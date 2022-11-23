import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
    .tup {
        height: 30px !important;
        background-color: #C20C0C;
    }

`

export const TopMenu = styled.div`
    display: flex;
    padding-left: 180px;
    background-color: #C20C0C;
    .item {
        font-size: 12px;
        padding-bottom: 3px;

        a {     
            position: relative;
            top: -2px;
            display: inline-block;
            height: 20px;
            line-height: 20px;
            padding: 0 13px;
            margin: 7px 17px 0;
            color: #fff;

            &:hover, &.active {
                text-decoration: none;
                background-color: #9B0909;
                border-radius: 20px;
            }
        }
    }
`

