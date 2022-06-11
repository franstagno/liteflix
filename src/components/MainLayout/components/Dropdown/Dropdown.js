import React, { useState } from "react";
import { Wrapper, BoxDown, Triangle, Option, Text } from "./styles";

const Dropdown = () => {
	const [open, setOpen] = useState(false);
	const [categories, setCategory] = useState([
		{ option: "populares", selected: true },
		{ option: "mis peliculas", selected: false },
	]);
	const handleChange = (index) => {
		const newCategories = categories.map((category, idx) => {
			if (index === idx) {
				category.selected = true;
				return category;
			}
			category.selected = false;
			return category;
		});
		setCategory(newCategories);
	};
	return (
		<Wrapper isOpen={open}>
			<Text onClick={() => setOpen(!open)}>
				ver:
				{categories.map(
					(category) =>
						category.selected && <span>{category.option}</span>
				)}
				<img src="/arrow.png"></img>
			</Text>
			<Triangle isOpen={open}></Triangle>
			<BoxDown isOpen={open}>
				{categories.map((category, index) =>
					category.selected ? (
						<Option selected={category.selected}>
							{category.option}
							<img src="/correct.png"></img>
						</Option>
					) : (
						<Option
							selected={category.selected}
							onClick={() => handleChange(index)}
						>
							{category.option}
						</Option>
					)
				)}
			</BoxDown>
		</Wrapper>
	);
};

export default Dropdown;
