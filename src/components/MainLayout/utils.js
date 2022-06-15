import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

export const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getMyMovies = async () => {
	try {
		const movies = collection(db, "movies");
		const moviesSnapshot = await getDocs(movies);
		const myMovies = moviesSnapshot.docs.map((doc) => doc.data());
		return myMovies.length > 4 ? myMovies.splice(0, 4) : myMovies;
	} catch (error) {
		console.warn("function getMyMovies", error);
		return [];
	}
};

export const getPopularMovie = async () => {
	try {
		const response = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"
		);
		const movies = await response.json();
		return movies.results.reduce(
			(acum, movie) =>
				(acum = acum.popularity > movie.popularity ? acum : movie),
			{}
		);
	} catch (error) {
		console.warn("function getPopularMovie", error);
		return {};
	}
};

export const getPopularsMovies = async () => {
	try {
		const response = await fetch(
			"https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20"
		);
		const movies = await response.json();
		return movies.results.splice(0, 4);
	} catch (error) {
		console.warn("function getPopularsMovies", error);
		return [];
	}
};
