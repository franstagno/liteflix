import React from "react";
import MainLayout from "../components/MainLayout";
import theme from "../theme";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

const root = createRoot(document.getElementById("root"));
root.render(
	<ThemeProvider theme={theme}>
		<MainLayout />
	</ThemeProvider>
);
