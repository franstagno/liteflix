import React, { useState, useContext } from "react";
import Add from "./Add";
import Success from "./Success";
import { Wrapper } from "./styles";

const AddMovie = () => {
	const [success, setSuccess] = useState(false);
	return (
		<Wrapper>
			{!success ? (
				<Add setSuccess={setSuccess}></Add>
			) : (
				<Success></Success>
			)}
		</Wrapper>
	);
};

export default AddMovie;
