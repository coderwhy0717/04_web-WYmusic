import styled from 'styled-components'

export const RadioCoverWrapper = styled.div`
  .radio-box {
    display: flex;
    align-items: center;
    color: #666;
    &:hover {
      background-color: #eeeeee !important;
    }
  }

  .img-box {
    margin: 10px 10px 10px 20px;
    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
    }
  }
  .name {
    flex: 1;
    a {
      color: #333;
    }
  }
  .dis {
    width: 150px;
  }
  .term {
    width: 120px;
    padding-right: 26px;
    text-align: right;
    color: #999;
  }

  .djbgc {
    background-color: #f7f7f7;
  }
`
