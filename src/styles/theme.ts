import createTheme from "@mui/material/styles/createTheme";


export const brewerySiteTheme = createTheme({
    palette: {
        primary: {
            main: "#252530",
            light: "#707579"
        },
        secondary: {
            main: "#b55610",
            light: "#cb8a03"
        },
        background: {
            default: "#fefbeb",
            paper: "#fef3c7"
        }
    },
    typography: {
        h1: {
            fontFamily: 'Rowdies',
            color: "#fef3c7"
        },
        h2: {
            fontFamily: 'IBM Plex Mono',
            fontSize: "2.8rem",
            padding: "1.3em 0em 0.3em 0em"
        },
        h3: {
            fontFamily: 'IBM Plex Mono',
            fontSize: "1.8rem"
        },
        button: {
            fontFamily: 'Rowdies'
        },
        body1: {
            padding: "1em"
        }
    }

})