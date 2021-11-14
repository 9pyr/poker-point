import styled from 'styled-components'
import { Link } from 'styles'

export const SiteName = styled.div`
  font-size: 1.8rem;
`

const LayoutStyled = styled.section`
  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-bottom: 1px solid;

    padding: 1rem 0;
  }

  ${Link} {
    display: inline-flex;
    justify-content: center;
    padding: 0.4rem 0.8rem;
  }
`
export default LayoutStyled
