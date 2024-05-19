import { useEffect, useRef, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import {storage} from "../../services/firebase/firebase.config";

function CardImage({ imageName }) {
  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageRef = ref(storage, `cards/${imageName}`);
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error('Could not get the image: ', error);
      }
    };
    fetchImage();
  },[imageName])

  return (
    <img src={imageUrl} alt={imageName} />
  )
}

export default CardImage;