import photos from "../../models/photos/photos.js";

function Photos() {
  return (
    <>
      {
        photos.map((photo) => {
          <img src={`/photos/${photo.src}`} alt="image not found" />
        })
      }
    </>
  )

}

export default Photos;