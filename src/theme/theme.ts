import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#2EA450",
		},
		secondary: {
			light: "#0066ff",
			main: "#0044ff",
			contrastText: "#ffcc00",
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},
	typography: {
		fontSize: 12,
	},
});

theme.typography.h1 = {
	fontSize: "1.2rem",
	"@media (min-width:600px)": {
		fontSize: "1.5rem",
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "2.4rem",
	},
};
