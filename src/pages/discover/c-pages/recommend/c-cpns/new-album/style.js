import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
    margin-top: 50px;
    .content {
        height: 186px;
        background-color: #f5f5f5;
        border: 1px solid #ccc;
        margin: 20px 0 37px;
        display: flex;
        align-items: center;
        .arrow {
            width: 25px;
            height: 25px;
            cursor: pointer;
        }
        .arrow-left {
            background-position: -260px -75px;
            &:hover {
                background-position: -280px -75px;
            }
        }
        .arrow-right {
            background-position: -300px -75px;
            :hover {
                background-position: -320px -75px;
            }
        }
    }

    .album {
        width: 640px;
        height: 150px;
        .page {
            display: flex !important;
            justify-content: space-between;
            align-items: center;
        }
    }

`