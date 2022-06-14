import React, { useState } from "react";
import Add from "./Add";
import Success from "./Success";
import { Wrapper } from "./styles";

const AddMovie = ({ isAddMovie, setIsAddMovie }) => {
	const [success, setSuccess] = useState(false);
	const [isLoading, setIsLoanding] = useState(false);
	return (
		<Wrapper>
			{!success ? (
				<Add
					isAddMovie={isAddMovie}
					setIsAddMovie={setIsAddMovie}
					setSuccess={setSuccess}
					setIsLoanding={setIsLoanding}
					isLoading={isLoading}
				></Add>
			) : (
				<Success></Success>
			)}
		</Wrapper>
	);
};

export default AddMovie;
