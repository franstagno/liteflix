import React from "react";
import Home from "../pages/Home";
import theme from "../theme";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

const root = createRoot(document.getElementById("root"));
root.render(
	<ThemeProvider theme={theme}>
		<Home />
	</ThemeProvider>
);
