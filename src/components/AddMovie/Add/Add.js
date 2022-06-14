import React, { useRef, useEffect, useState } from "react";
import InlineSVG from "svg-inline-react";
import CloseSvg from "../../../svg/close.svg";
import ProgressBar from "@ramonak/react-progress-bar";
import { firebaseConfig } from "../../../components/MainLayout/utils";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import {
	Wrapper,
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

const Add = ({
	isAddMovie,
	setIsAddMovie,
	setSuccess,
	isLoading,
	setIsLoanding,
}) => {
	const hiddenFileInput = useRef(null);
	const [file, setFile] = useState([]);
	const [movie, setMovie] = useState({});
	const [cancelUpload, setCancelUpload] = useState({});
	const [progress, setProgress] = useState(false);

	const firebaseApp = initializeApp(firebaseConfig);
	const db = getFirestore(firebaseApp);

	const uploadFile = (e) => {
		setFile([...e.target.files]);
		setMovie({ ...movie, backdrop_path: e.target.files[0].name });
	};

	const handleCancel = () => {
		hiddenFileInput.current.value = "";
		cancelUpload.cancel();
		setProgress(false);
		setFile([]);
	};
	const onChange = (e) => {
		setMovie({ ...movie, title: e.target.value });
	};
	const handleSubmit = async () => {
		setIsLoanding(true);
		await addDoc(collection(db, "movies"), movie);
		setSuccess(true);
	};

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
	return (
		<Wrapper>
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
				<Upload onClick={() => hiddenFileInput.current.click()}>
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
			<InputText
				type="text"
				placeholder="TÍTULO"
				onChange={onChange}
			></InputText>
			<Button
				text="subir película"
				disabled={!progress || !movie.title}
				onClick={() => handleSubmit()}
				loading={isLoading}
			></Button>
			<Close onClick={() => setIsAddMovie(!isAddMovie)}>
				<InlineSVG src={CloseSvg}></InlineSVG>
			</Close>
		</Wrapper>
	);
};

export default Add;
