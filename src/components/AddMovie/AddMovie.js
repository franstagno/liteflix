import React, { useRef } from "react";
import InlineSVG from "svg-inline-react";
import CloseSvg from "../../svg/close.svg";
import {
	Wrapper,
	Block,
	Text,
	InputText,
	InputFile,
	Close,
	Button,
	Upload,
} from "./styles";

const AddMovie = ({ isAddMovie, setIsAddMovie }) => {
	const hiddenFileInput = useRef(null);
	const handleClick = (event) => {
		hiddenFileInput.current.click();
	};
	return (
		<Wrapper>
			<Block>
				<Text>agregar película</Text>
				<Upload onClick={() => handleClick()}>
					Agregá un archivo o arrastralo y soltalo aquí
				</Upload>
				<InputFile
					type="file"
					multiple
					accept="image/*"
					ref={hiddenFileInput}
				></InputFile>
				<InputText type="text"></InputText>
				<Button text="subir película"></Button>
				<Close onClick={() => setIsAddMovie(!isAddMovie)}>
					<InlineSVG
						src={CloseSvg}
						onClick={() => setIsOpenMenu(!isOpenMenu)}
					></InlineSVG>
				</Close>
			</Block>
		</Wrapper>
	);
};

export default AddMovie;
