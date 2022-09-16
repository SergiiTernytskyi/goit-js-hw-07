import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

const galleryItemDivMarkup = galleryItems.map(({ preview, original, description }) => {
  return `<div class="gallery__item"><a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"
    />
  </a></div>`;
});

const galleryItemDivMarkupString = galleryItemDivMarkup.join('');

galleryRef.innerHTML += galleryItemDivMarkupString;

let instance;

galleryRef.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  window.addEventListener('keydown', onGalleryItemClose);

  instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1280" height="auto">
`);
  instance.show();
}

function onGalleryItemClose(event) {
  if (event.code === 'Escape') {
    instance.close(() => console.log('lightbox not visible anymore'));
    window.removeEventListener('keydown', onGalleryItemClose);
  }
}
