import { useRef, useState } from 'react';

import './GalleryGrid.css';

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

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);
  const sequence = useRef([...images]);

  const handleDragStart = (index) => {
    dragItem.current = index;
  };

  const handleDragEnter = (index) => {
    dragOverItem.current = index;

    let _images = [...sequence.current];

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

  // if (images.length === 0) {
  //   return <div className="gallery__no-image">No Images</div>;
  // }

  return (
    <div className="gallery__grid">
      {images.map((image, index) => {
        return (
          <img
            src={image}
            alt=""
            key={image}
            className="gallery__grid__image"
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragLeave={handleDragLeave}
            onDragEnd={handleDragEnd}
            onDragOver={(e) => e.preventDefault()}
          />
        );
      })}
    </div>
  );
};

export default GalleryGrid;
