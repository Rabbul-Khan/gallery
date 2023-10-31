import GalleryGrid from '../GalleryGrid/GalleryGrid';

import './Gallery.css';
const Gallery = () => {
  return (
    <div className="gallery__wrapper">
      <header>
        <h1>Gallery</h1>
      </header>
      <main>
        <GalleryGrid />
      </main>
    </div>
  );
};

export default Gallery;
