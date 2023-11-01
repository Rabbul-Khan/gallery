/* eslint-disable react/prop-types */
import './GalleryImage.css';

const GalleryImage = ({
  image,
  index,
  handleDragStart,
  handleDragEnter,
  handleDragLeave,
  handleDragEnd,
  handleCheck,
}) => {
  return (
    <>
      <img
        src={image}
        alt="Gallery image"
        className="gallery-grid__image"
        draggable
        onDragStart={() => handleDragStart(index)}
        onDragEnter={() => handleDragEnter(index)}
        onDragLeave={handleDragLeave}
        onDragEnd={handleDragEnd}
        onDragOver={(e) => e.preventDefault()}
      />
      <input type="checkbox" value={image} size="25" onChange={handleCheck} />
    </>
  );
};

export default GalleryImage;
