import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const galleryItemDivMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join('');

galleryRef.insertAdjacentHTML('beforeend', galleryItemDivMarkup);

let gallery = new SimpleLightbox('.gallery__item', {
  captionPosition: 'bottom',
  captionDelay: 250,
  captionsData: 'alt',
});
