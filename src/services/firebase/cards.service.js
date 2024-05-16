import { push, remove, get, ref } from "firebase/database";
import firebaseService from "./firebase.config.js";
import { getDownloadURL, uploadBytes, ref as storageRef } from "firebase/storage"
import db from "./firebase.config.js";

const refCards = ref(db, "/cards");

const getAllCards = () => {
	return get(refCards);
};

const addCard = (name, type, img, deck) => {
	return push(refCards, {
		name: name,
		type: type,
		img: img,
		deck: deck
	});
};

const removeCard = (key) => {
	const dbRefCard = (db, `/cards/${key}`);
	return remove(dbRefCard);
};

export default {
	getAllCards,
	addCard,
	removeCard,
}