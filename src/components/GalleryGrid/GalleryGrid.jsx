import { useRef, useState } from 'react';

import GalleryImage from '../GalleryImage/GalleryImage';

import Img1 from '/image-1.webp';
import Img2 from '/image-2.webp';
import Img3 from '/image-3.webp';
import Img4 from '/image-4.webp';
import Img5 from '/image-5.webp';
import Img6 from '/image-6.webp';
import Img7 from '/image-7.webp';
import Img8 from '/image-8.webp';
import Img9 from '/image-9.webp';
import Img10 from '/image-10.jpeg';
import Img11 from '/image-11.jpeg';
import deleteIcon from '/delete-icon.svg';
import addImagesIcon from '/add-images.png';

import './GalleryGrid.css';

const GalleryGrid = () => {
  const [images, setImages] = useState([
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
  ]);
  const [checked, setChecked] = useState([]); // This state keeps track of which checkboxes have been checked

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);
  const sequence = useRef([...images]); // This ref stores the original sequence since the moment a drag event starts and stays the same until the drag event ends.

  const handleDragStart = (index) => {
    dragItem.current = index;
  };

  const handleDragEnter = (index) => {
    dragOverItem.current = index;

    let _images = [...sequence.current];

    // The image being dragged is removed from its current position in the images array and placed in the new position where it is dragged over.
    const draggedElement = _images.splice(dragItem.current, 1)[0];
    _images.splice(dragOverItem.current, 0, draggedElement);
    setImages(_images);
  };

  const handleDragLeave = () => {
    dragOverItem.current = null;
  };

  const handleDragEnd = () => {
    dragItem.current = null;
    dragOverItem.current = null;
    sequence.current = [...images];
  };

  const handleCheck = (e) => {
    let imagesToBeDeleted = [...checked];
    if (e.target.checked) {
      imagesToBeDeleted = [...checked, e.target.value];
    } else {
      imagesToBeDeleted.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(imagesToBeDeleted);
  };

  const handleDelete = () => {
    let imagesRemaining = images.filter((image) => {
      return !checked.includes(image);
    });
    setImages(imagesRemaining);
    setChecked([]);
    sequence.current = [...imagesRemaining];
  };

  return (
    <div className="gallery-grid">
      <button className="btn-delete" onClick={handleDelete}>
        <img className="btn-delete__icon" src={deleteIcon} alt="Delete icon" />
        Delete {checked.length} item(s)
      </button>
      {images.map((image, index) => {
        return (
          <div className="gallery-grid__image-wrapper" key={image}>
            <GalleryImage
              image={image}
              index={index}
              handleDragStart={handleDragStart}
              handleDragEnter={handleDragEnter}
              handleDragLeave={handleDragLeave}
              handleDragEnd={handleDragEnd}
              handleCheck={handleCheck}
            />
          </div>
        );
      })}

      <img
        className="gallery-grid__add-images"
        src={addImagesIcon}
        alt="Add images icon"
        draggable={false}
      />
    </div>
  );
};

export default GalleryGrid;
