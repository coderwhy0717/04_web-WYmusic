import styled from 'styled-components'

export const SongsTitleCoverWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:  0 0 5px 0;
    border-bottom: 2px solid #c20c0c;
    .left {
        display: flex;
        align-items: center;
        .all {
            font-size: 25px;
            margin-right: 10px;
        }
        .btn {
            position: relative;
            text-align: center;
            font-size: 13px;
           
            width: 90px;
            height: 31px;
            line-height: 27px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f6f6f6;
            .btns {
                color: #0c73c2;
                :hover {
                    cursor: pointer;
                    background-color: #fff;
                }
            }
            
            .icon {
                display: inline-block;
                margin-left: 5px;
                width: 8px;
                height: 5px;
                background-position: -70px -543px;
            }
            .info {
                position: absolute;
                top: 47px;
                left: -90px;
                text-align: left;
                width: 700px;
                box-shadow: 0 2px 8px 3px rgba(0,0,0,.4);
                z-index: 999999;
                background-color: #fff;
                display:  ${props => {
                    return props.isShow ? 'block' : 'none'
                }};
                .iconw {
                    position: absolute;
                    top: -11px;
                    left: 120px;
                    width: 24px;
                    height: 11px;
                    background-position: -48px 0;
                }
                .info-top {
                    width: 100%;
                    height: 60px;
                    border-bottom: 1px solid #e9e9e9;
                    button {
                        margin: 20px 0 0 30px;
                        padding: 0 15px;
                        border: 1px solid #ccc;
                        font-size: 12px;
                        background-color: #f9f9f9;
                        border-radius: 5px;
                    }
                }
                .info-conent {
                    position: relative;
                    width: 100%;
                    padding-bottom: 30px;
                    .xian {
                        position: absolute;
                        top: 0;
                        left: 105px;
                        height: 100%;
                        border-left: 1px solid #e9e9e9;
                    }
                    .type0 {
                        display: flex;
                        .conentt {
                            padding: 16px 15px 0 15px;
                            font-size: 12px;
                            display: inline-block;
                            width: 580px;
                            .namesa {
                                color: #000;
                                .textd {
                                    :hover {
                                        cursor: pointer;
                                        text-decoration: underline;
                                    }
                                }
                                .iss {
                                    border-right: 1px solid #d8d8d8;
                                    margin: 0 10px 0 10px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .right {
        width: 46px;
        height: 29px;
        text-align: center;
        line-height: 29px;
        border-radius: 5px;
        background-position: 0 0;
        a {
            color: #fff;
        }
    }
`

export const TtitleWrapper = styled.div`
            width: 105px;
            padding: 16px 15px 0 15px;
            text-align: right;
            color: #000;
            font-weight: 550;
            .namea {
               position: relative;
               top: -5px;
            }
            .icona {
                display: inline-block;
                width: 23px;
                height: 23px;
                margin-right: 8px;
                background-position: ${props => {
                    switch(props.index) {
                        case 1:
                            return '0 -60px'
                        case 2:
                            return '0 -88px'
                        case 3:
                            return '0 -117px'
                        case 4:
                            return '0 -141px'
                        default:
                            return '-20px -735px'
                    }
                }};
            }
`