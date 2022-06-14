import React, { useState } from "react";
import { Wrapper, BoxDown, Triangle, Option, Text } from "./styles";

const Dropdown = ({ categories, setCategory }) => {
	if (!categories.length) return;
	const [open, setOpen] = useState(false);
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
					(category, index) =>
						category.selected && (
							<span key={index}>{category.displayName}</span>
						)
				)}
				<img src="/arrow.png"></img>
			</Text>
			<Triangle isOpen={open}></Triangle>
			<BoxDown isOpen={open}>
				{categories.map((category, index) =>
					category.selected ? (
						<Option selected={category.selected} key={index}>
							{category.displayName}
							<img src="/correct.png"></img>
						</Option>
					) : (
						<Option
							key={index}
							selected={category.selected}
							onClick={() => handleChange(index)}
						>
							{category.displayName}
						</Option>
					)
				)}
			</BoxDown>
		</Wrapper>
	);
};

export default Dropdown;
