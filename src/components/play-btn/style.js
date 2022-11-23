import styled from 'styled-components'

export const PlayBtnWrapper = styled.div`
                   font-size: 12px;
                   align-items: center;
                    .common {
                        min-width: 23px;
                        height: 31px;
                        margin-right: 5px;
                        border: 1px solid #bababa;
                        border-bottom: none;
                        border-radius: 4px;
                        padding-left: 30px;
                        cursor: pointer;
                        font-weight: 200;

                    }
                    .play {
                        min-width: 23px;
                        height: 31px;
                        padding:0 10px 0 30px;
                        margin-bottom: 5px;
                        color: #fff;
                        border-radius: 5px 0 0 5px;
                        background-position: -5px -633px;
                        cursor: pointer;
                        :hover {
                            background-position: -5px -719px;
                        }
                    }
                    .join {
                        width: 31px;
                        height: 31px;
                        margin-right: 5px;
                        background-position: 0 -1588px;
                        text-indent:-9999999px;
                        cursor: pointer;
                        :hover {
                             background-position: -40px -1588px;

                        }
                    }
                    .collect {
                        border-top: none;
                        background-position: -1px -977px;
                        :hover {
                            background-position: -1px -1063px;

                        }
                    }
                    .share {
                        background-position: -1px -1226px;
                        :hover {
                            background-position: -1px -1269px;
                        }
                    }
                    .download {
                        background-position: -1px -2762px;
                        :hover {
                            background-position: -1px -2806px;
                        }
                    }
                    .comment {
                        background-position: -1px -1466px;
                        :hover {
                            background-position: -1px -1509px;
                        }
                    }
                    
`