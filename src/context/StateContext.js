import React, { useState } from "react";

const StateContext = React.createContext(null);

export const StateContextProvider = ({ children }) => {
	const initialState = {
		myMovies: [],
		popularMovies: [],
		featuredMovie: {},
		addMovie: false,
		menu: false,
	};
	const [movies, setMovies] = useState(initialState);
	return (
		<StateContext.Provider value={{ movies, setMovies }}>
			{children}
		</StateContext.Provider>
	);
};

export default StateContext;
