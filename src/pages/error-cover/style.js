import styled from 'styled-components'

// true 不显示 false显示
export const ErrorCoverWrapper = styled.div`
  display: ${(props) => {
    if (props.err === 'ERR_NETWORK') {
      return 'block'
    } else {
      return props.err ? 'none' : 'block'
    }
  }};
  width: 100%;
  flex: 1;
  padding-top: 50px;
  height: 100vh;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 100px;
  font-size: 22px;
`
