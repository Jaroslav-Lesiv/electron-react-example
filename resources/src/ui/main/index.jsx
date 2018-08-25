import styled, { keyframes } from 'styled-components'
import logo from '../../logo.svg'
import { navigation } from '../'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
`
const Main = styled.div`
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: 100vh;
`

const Logo = styled.img.attrs({
    src: logo,
    alt: `AppLogo`,
})`
   width:  50px;
   height:  50px;
   animation: ${spin} infinite 20s linear;
`
export {
    Wrapper,
    Main,
    Logo
}