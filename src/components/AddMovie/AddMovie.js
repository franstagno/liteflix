import React, { useRef, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import InlineSVG from "svg-inline-react";
import CloseSvg from "../../svg/close.svg";
import ProgressBar from "@ramonak/react-progress-bar";
import {
	Wrapper,
	Block,
	Title,
	InputText,
	InputFile,
	Close,
	Button,
	Upload,
	WrapperBar,
	Text,
	Legend,
} from "./styles";

const AddMovie = ({ isAddMovie, setIsAddMovie }) => {
	const hiddenFileInput = useRef(null);
	const [file, setFile] = useState([]);
	const [cancelUpload, setCancelUpload] = useState({});
	const [progress, setProgress] = useState(false);
	const uploadFile = (e) => {
		setFile([...e.target.files]);
	};
	const handleClick = () => {
		hiddenFileInput.current.click();
	};
	const handleCancel = () => {
		hiddenFileInput.current.value = "";
		cancelUpload.cancel();
		setProgress(false);
		setFile([]);
	};
	const handleSubmit = () => {};
	const firebaseConfig = {
		apiKey: process.env.FIREBASE_API_KEY,
		authDomain: process.env.FIREBASE_AUTH_DOMAIN,
		projectId: process.env.FIREBASE_PROJECT_ID,
		storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
		messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
		appId: process.env.FIREBASE_APP_ID,
	};
	const firebaseApp = initializeApp(firebaseConfig);
	useEffect(() => {
		if (file.length) {
			const storage = getStorage(firebaseApp);
			const imageRef = ref(storage, file[0].name);
			const imageUpload = uploadBytesResumable(imageRef, file[0]);
			setCancelUpload(imageUpload);
			imageUpload.on("state_changed", (snapshot) => {
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setProgress(Math.round(progress));
			});
		}
	}, [file]);
	console.log("hola-file", file);
	return (
		<Wrapper>
			<Block>
				<Title>agregar película</Title>
				{progress || progress === 0 ? (
					<WrapperBar>
						<Text>{`cargando ${progress}%`}</Text>
						<ProgressBar
							completed={progress}
							className="custom-progres-bar"
							borderRadius="0"
							isLabelVisible={false}
							bgColor="#64eebc"
						></ProgressBar>
						<Legend onClick={() => handleCancel()}>
							{progress === 100 ? `¡ listo !` : "cancelar"}
						</Legend>
					</WrapperBar>
				) : (
					<Upload onClick={() => handleClick()}>
						Agregá un archivo o arrastralo y soltalo aquí
					</Upload>
				)}
				<InputFile
					type="file"
					multiple
					accept="image/*"
					ref={hiddenFileInput}
					onChange={uploadFile}
				></InputFile>
				<InputText type="text" placeholder="TÍTULO"></InputText>
				<Button text="subir película" disabled={!progress}></Button>
				<Close onClick={() => setIsAddMovie(!isAddMovie)}>
					<InlineSVG src={CloseSvg}></InlineSVG>
				</Close>
			</Block>
		</Wrapper>
	);
};

export default AddMovie;
