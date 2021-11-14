import styled, { createGlobalStyle } from 'styled-components'
import { Link as routerLink } from 'react-router-dom'

const GlobalStyles = createGlobalStyle`
    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`
export default GlobalStyles

export const Link = styled(routerLink)`
  display: flex;
  border: 1px solid;
  border-radius: 0.6rem;
  text-decoration: none;
  color: black;
`
