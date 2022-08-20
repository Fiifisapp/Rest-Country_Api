import { createGlobalStyle } from "styled-components"
export const lightTheme = {
    body:'#fff',
    fontColor:"#000"
}

export const darkTheme = {
    body: "#2B3844",
    fontColor:"#fff"
}

export const Globalstyles = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.body};
    }
`