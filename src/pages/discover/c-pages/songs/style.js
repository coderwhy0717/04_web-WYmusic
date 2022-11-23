import  styled  from "styled-components";

export const SongSWrapper = styled.div`
    padding: 40px;
    border: 1px solid #ccc;
    .div {
        display: ${props => {
            return props.err ? 'block' : 'none'
        }};
    }
   
    .conent {
        padding: 20px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .pagin {
        text-align: center;
    }
    .allcover {
        display: ${props => {
            return props.showZ ? 'block' : 'none'
        }};
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vw;
        z-index: 9999;
    }
`