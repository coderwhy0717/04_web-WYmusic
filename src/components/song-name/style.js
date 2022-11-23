import styled from 'styled-components'

export const SongNameWrapper = styled.div`
            display: flex;
            align-items: center;
            width: ${props => {
                return props.showname ? '298px' : '225px'
            }};
            color: #333;
            font-size: 12px;
            .images {
                position: relative;
                width: 50px;
                height: 50px;
                margin-right: 12px;
                .image {
                    width: 50px;
                    height: 50px;
                }
                a {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    width: 50px;
                    height: 50px;
                }
            }
            
            .item {
                /* width: 200px; */
                .table {
                    position: relative;
                    bottom: -4px;
                    display: inline-block;
                    width: 17px;
                    height: 17px;
                    cursor: pointer;
                    margin-right: 5px;
                    background-position:  0 -103px;
                    :hover {
                        background-position:${props => {
                            return props.showIcon ? '-20px -128px' : '0 -128px'
                        }};
                    }
                }
                .active {
                        color: red;
                        background-position: -20px -128px;
                }
            }
            span {
                color: #999;
            }
            .mv {
                width: 30px;
                height: 17px;
                margin: 1px 0 0 2px;
                background-position: 0 -151px;
                cursor: pointer;
                :hover {
                    background-position: -30px -151px;
                }
            }
        
`