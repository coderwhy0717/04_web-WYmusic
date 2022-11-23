import styled from 'styled-components'

export const CommentWrapper = styled.div`
    margin-top: 30px;
    .comment-header {
        display: flex;
        align-items: center;
        border-bottom: 2px solid #c20c0c;
        margin-bottom: 20px;
        .text {
            font-size: 20px;
            margin-right: 20px;
            padding-bottom: 5px;
        }
    }
    .comment-text {
        display: flex;
        img {
            width: 50px;
            height: 50px;
        }
        .div-text {
            position: relative;
            width: 100%;

            .text {
                margin-left: 15px;
                border: 1px solid #ccc;
                padding: 5px 8px;
                height: 80px;
                width: 100%;
            }
            .icon {
                    position: absolute;
                    left: 8px;
                    top: 0;
                    font-size: 25px;
                    color: #ccc;
            }
            .icons {
                    position: absolute;
                    left: 9.5px;
                    top: 0;
                    font-size: 25px;
                    color: #fff;
            }
            .onbottom {
                display: flex;
                justify-content: space-between;
                padding: 10px 0 0 18px;
            }
        }
            
            
    }
`