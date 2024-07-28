import { createTheme } from '@mui/material/styles';
//export theme settings
// mui theme settings 
export const theme = createTheme({

    palette: {
        mode: 'dark',
        primary: {
            main: '#4F33FF',

        },
        secondary: {
            main: '#F9F871',
            dark: "#F8F770",

        },
        contrastThreshold: 4.5,
    },
    typography: {
        fontFamily: [
            'var(--font-work-sans)',
            "Segoe UI",
            'sans-serif',
        ].join(','),
        h1: {
            fontSize: '5rem',
            fontWeight: 600,
            color: "var(--dark-on-surface)",

            '@media (max-width:900px)': {
                fontSize: '3rem',
            },
        },
        h2: {
            fontWeight: 600,
            color: "var(--dark-on-surface)",

            '@media (max-width:600px)': {
                fontSize: '2.5rem',
            },
        },
        h3: {
            fontWeight: 600,
            letterSpacing: "0.05rem",
            color: "var(--dark-on-surface)",
        },
        h4: {
            fontWeight: 500,
            color: "var(--dark-on-surface)",

            '@media (max-width:900px)': {
                fontSize: '1.5rem',
            },
        },
        h5: {
            fontWeight: 400,
            letterSpacing: "0.02rem",

            color: "var(--dark-on-surface)",

        },

        h6: {
            fontWeight: 400,
            letterSpacing: "0.02rem",
            color: "var(--dark-on-surface)",

        },
        body1: {
            fontWeight: 350,
            letterSpacing: "0.02rem",
            color: "var( --dark-on-surface-variant)"
        },
        body2: {
            fontWeight: 300,
            letterSpacing: "0.05rem",
        },
        subtitle1: {
            color: "var(--dark-on-surface)",

        }

    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "50px",
                    textTransform: "none",

                }
            }
        }
    }
});

export const lightTheme = createTheme({

    palette: {
        mode: 'light',
        primary: {
            main: '#176416',

        },
        secondary: {
            main: '#176416',


        },
        contrastThreshold: 4.5,
    },
    typography: {
        fontFamily: [
            'var(--font-work-sans)',
            "Segoe UI",
            'sans-serif',
        ].join(','),
        h1: {
            fontSize: '5rem',
            fontWeight: 600,
            color: "var(--light-on-surface)",

            '@media (max-width:900px)': {
                fontSize: '3rem',
            },
        },
        h2: {
            fontWeight: 600,
            color: "var(--light-on-surface)",

            '@media (max-width:600px)': {
                fontSize: '2.5rem',
            },
        },
        h3: {
            fontWeight: 600,
            letterSpacing: "0.05rem",
            color: "var(--light-on-surface)",
        },
        h4: {
            fontWeight: 500,
            color: "var(--light-on-surface)",

        },
        h5: {
            fontWeight: 400,
            letterSpacing: "0.02rem",

            color: "var(--light-on-surface)",

        },

        h6: {
            fontWeight: 400,
            letterSpacing: "0.02rem",
            color: "var(--light-on-surface)",

        },
        body1: {
            fontWeight: 300,
            color: "var( --light-on-surface-variant)"
        },
        body2: {
            fontWeight: 300,
            letterSpacing: "0.05rem",
        },
        subtitle1: {
            color: "var(--light-on-surface)",

        }

    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "50px",
                    textTransform: "none",

                }
            }
        }
    }
});