import React from "react";
import MainLayout from "../components/MainLayout";
import theme from "../theme";
import { StateContextProvider } from "../context/StateContext";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

const root = createRoot(document.getElementById("root"));
root.render(
	<ThemeProvider theme={theme}>
		<StateContextProvider>
			<MainLayout />
		</StateContextProvider>
	</ThemeProvider>
);
