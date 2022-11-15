import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // This is sangria
      main: "#9A0002",
      contrastText: "#fff",
    },
    secondary: {
      // This is persian blue
      main: "#1944af",
      contrastText: "#6B6C7E",
    },
  },
  typography: {
    fontFamily: "'Ubuntu', sans-serif",
    allVariants: {
      color: "#393A4A",
    },
    h5: {
      fontSize: "1.286rem",
      fontWeight: 700,
    },
    body1: {
      // fontSize: "1rem",
      fontSize: "1.14rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.75rem",
    },
    button: {
      fontSize: "1.14rem",
      textTransform: "capitalize",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
      styleOverrides: {
        root: {
          "& .MuiMenuItem-root:hover": {
            borderBottom: "0.1px solid rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained-main" },
          style: {
            backgroundColor: "#9A0002",
            color: "#fff",
            padding: "6px 1.3rem",
            whiteSpace: "nowrap",
            "&:hover": {
              backgroundColor: "#1944af",
            },
          },
        },
        {
          props: { variant: "contained-alt" },
          style: {
            backgroundColor: "hsl(220, 22%, 89%)",
            color: "#9A0002",
            padding: "6px 1.3rem",
            "&:hover": {
              backgroundColor: "hsla(220, 62%, 52%, 40%)",
            },
          },
        },
        {
          props: { variant: "text-main" },
          style: {
            border: "0.2rem solid transparent",
            padding: "6px 1.3rem",
            "&:focus": {
              borderBottom: "0.2rem solid #9A0002",
              borderRadius: "0",
              color: "#9A0002",
              fontWeight: 700,
            },
          },
        },
      ],
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "& .MuiPopover-paper": {
            top: "12rem", // property is overriden by another style in DOM
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "&.MuiSelect-icon": {
            color: "#FFF",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.MuiOutlinedInput-root": {
            color: "#6B6C7E",
            fontSize: "1.14rem",
            paddingRight: 0,
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.MuiTab-root": {
            justifyContent: "start",
            margin: "1rem 0",
            minHeight: "auto",
            padding: "0 0 0 20px",
            textAlign: "left",
            textTransform: "none",
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        // Name of the slot
        root: {
          "& .MuiDataGrid-virtualScrollerRenderZone": {
            // style datagrid rows
            "& .MuiDataGrid-row": {
              "&:nth-of-type(2n)": {
                backgroundColor: "hsla(254, 46%, 37%, 0.2)",
              },
            },
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "hsla(254, 46%, 37%, 0.2)",
            color: "#000",
            fontSize: "1.1rem",
            fontWeight: 900,
          },
        },
      },
    },
  },
});

export default theme;
