import { push, remove, get, ref } from "firebase/database";
import firebaseService from "./firebase.config.js";
import { getDownloadURL, uploadBytes, ref as storageRef } from "firebase/storage"

const refCards = ref(firebaseService.db, "/cards");

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
	const dbRefCard = ref(firebaseService.db, `/cards/${key}`);
	return remove(dbRefCard);
};


const uploadCardImage = (image, imgName) => {
  console.log(image);
  const myStorageRef = storageRef(firebaseService.storage, imgName);
  return uploadBytes(myStorageRef, image);
}


const getCardImage = (snapshotUrl) => {
	return getDownloadURL(snapshotUrl);
}

export default {
	getAllCards,
	addCard,
	removeCard,
	uploadCardImage,
	getCardImage
}