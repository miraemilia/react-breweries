import createTheme from "@mui/material/styles/createTheme";

export const brewerySiteTheme = createTheme({
    palette: {
        primary: {
            main: '#252530',
            light: '#707579'
        },
        secondary: {
            main: '#cb8a03',
            light: '#fefbeb'
        },
        background: {
            default: '#fefbeb',
            paper: '#fef3c7'
        }
    },
    typography: {
        h1: {
            fontFamily: 'Rowdies',
            fontSize: 'relative',
            
        },
        h2: {
            fontFamily: 'IBM Plex Mono',
            fontSize: '2.8rem',
            padding: '1.3em 0em 0.3em 0em'
        },
        h3: {
            fontFamily: 'IBM Plex Mono',
            fontSize: '1.8em'
        },
        button: {
            fontSize: '1.3em',
            fontFamily: 'Rowdies',
        },
        body1: {
            padding: '1em'
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    color: '#fef3c7'
                }
            },
        }
    }
})