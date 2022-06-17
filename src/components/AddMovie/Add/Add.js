import React, { useRef, useEffect, useState, useContext } from "react";
import StateContext from "../../../context/StateContext";
import InlineSVG from "svg-inline-react";
import CloseSvg from "../../../svg/close.svg";
import ProgressBar from "@ramonak/react-progress-bar";
import { firebaseConfig } from "../../../components/MainLayout/utils";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { FileUploader } from "react-drag-drop-files";
import { getIsMobile } from "../../MainLayout/utils";

import {
	Wrapper,
	Title,
	InputText,
	Close,
	ButtonSubmit,
	WrapperBar,
	Text,
	Legend,
	ButtonExit,
} from "./styles";

const Add = ({ setSuccess }) => {
	const [movie, setMovie] = useState({ file: false });
	const [error, setError] = useState(false);
	const [isLoading, setIsLoanding] = useState(false);
	const [cancelUpload, setCancelUpload] = useState({});
	const [progress, setProgress] = useState(false);
	const { movies, setMovies } = useContext(StateContext);
	const firebaseApp = initializeApp(firebaseConfig);
	const db = getFirestore(firebaseApp);
	const isMobile = getIsMobile();

	const uploadFile = (file) => {
		setMovie({
			...movie,
			backdrop_path: file.name.replace(/\s/g, "-"),
			file,
		});
	};

	const handleCancel = () => {
		if (progress === 100 && !error) return;
		movie.file = "";
		cancelUpload.cancel();
		setError(false);
		setProgress(false);
		setMovie({ ...movie, file: false });
	};

	const handleChange = (e) => {
		setMovie({ ...movie, title: e.target.value });
	};

	const handleSubmit = async () => {
		setIsLoanding(true);
		await addDoc(collection(db, "movies"), {
			title: movie.title,
			backdrop_path: movie.backdrop_path,
		});
		setSuccess(true);
	};

	useEffect(() => {
		if (movie.file) {
			const storage = getStorage(firebaseApp);
			const imageRef = ref(storage, movie.file.name.replace(/\s/g, "-"));
			const imageUpload = uploadBytesResumable(imageRef, movie.file);
			setCancelUpload(imageUpload);
			imageUpload.on(
				"state_changed",
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					setProgress(Math.round(progress));
				},
				() => {
					setProgress(100);
					setError(true);
				}
			);
		}
	}, [movie.file]);

	return (
		<Wrapper>
			<Title>agregar película</Title>
			{progress || progress === 0 ? (
				<WrapperBar>
					<Text>
						{progress === 100 && !error && `${progress}% cargado`}
						{progress !== 100 && !error && `cargando ${progress}%`}
						{progress === 100 &&
							error &&
							"¡error no se pudo cargar la pelicula"}
					</Text>
					<ProgressBar
						completed={progress}
						className="custom-progres-bar"
						borderRadius="0"
						isLabelVisible={false}
						bgColor={!error ? "#64eebc" : "#FF0000"}
					></ProgressBar>
					<Legend
						progress={progress}
						error={error}
						onClick={() => handleCancel()}
					>
						{progress === 100 && !error && `¡ listo !`}
						{progress !== 100 && !error && `cancelar`}
						{progress === 100 && error && "reintentar"}
					</Legend>
				</WrapperBar>
			) : (
				<FileUploader
					handleChange={uploadFile}
					name="file"
					label={
						isMobile
							? "Agregá un archivo"
							: "Agregá un archivo o arrastralo y soltalo aquí"
					}
					classes="input-file"
					fileOrFiles={movie.file}
				/>
			)}
			<InputText
				type="text"
				placeholder="TÍTULO"
				onChange={handleChange}
			></InputText>
			<ButtonSubmit
				text="subir película"
				disabled={!progress || !movie.title || error}
				onClick={() => handleSubmit()}
				loading={isLoading}
			></ButtonSubmit>
			<ButtonExit
				text="salir"
				onClick={() => setMovies({ ...movies, addMovie: false })}
			></ButtonExit>
			<Close onClick={() => setMovies({ ...movies, addMovie: false })}>
				<InlineSVG src={CloseSvg}></InlineSVG>
			</Close>
		</Wrapper>
	);
};

export default Add;
