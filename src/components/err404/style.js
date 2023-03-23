import styled from 'styled-components'

export const Err404Wrapper = styled.div`
  display: ${(props) => (props.err === 404 ? 'block' : 'none')};
`
