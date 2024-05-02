import { get, ref } from "firebase/database";
import db from "./firebase.config.js";

const refCards = ref(db, "/cards");

const getAllCards = () => {
	return get(refCards);
}

export default {
	getAllCards
}