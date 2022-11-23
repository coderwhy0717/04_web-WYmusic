import styled from 'styled-components'

export const DownWrapper = styled.div`
    font-size: 12px;
    color: #999;
    margin-bottom: 35px;
   .dow {
        height: 65px;
        margin-bottom: 13px;
        cursor: pointer;
        a {
            width: 42px;
            height: 50px;
            display: inline-block;
            text-indent: -9999999px;
        }
        .iphone {
            background-position:0 -391px;
            :hover {
                background-position:0 -471px;
            }
        }
        .pc {
            width: 62px;
            margin: 0 23px 0 26px;
            background-position:-72px -391px;
            :hover {
                background-position:-72px -471px;

            }
        }
        .and {
            background-position:-159px -391px;
            :hover {
                background-position:-159px -471px;
            }
        }
   }
`