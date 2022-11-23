import styled from 'styled-components'

export const SongListIndexWrapper = styled.div`
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 54px;
            padding-left: 5px;
            color: #999;
            font-size: 12px;
            .table {
                width: 17px;
                height: 17px;
                cursor: pointer;
                background-position:  0 -103px;
                :hover {
                    background-position: ${props => {
                      return  props.showIcon ? '-20px -128px' : '0 -128px'
                    }};
                }
            }
            .new {
                width: 17px;
                height: 17px;
                background-position: -67px -283px;
            }
            .active {
                    color: red;
                    background-position: -20px -128px;
            }
`