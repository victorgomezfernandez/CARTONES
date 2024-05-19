import photos from "../../models/photos/photos.js";
import "./Photos.css";

function Photos() {
  return (
    <>
      <div className="photos-general">
        <div className="photos-container">
          {
            photos.map((photo) => (
              <img src={`/photos/${photo.src}`} alt="image not found" />
            ))
          }
        </div>
      </div>
    </>
  )

}

export default Photos;