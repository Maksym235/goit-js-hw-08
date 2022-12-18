import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryRefs = document.querySelector('.gallery');
console.log(galleryRefs);
const galleryItemList = createGalleryItemList(galleryItems);

function createGalleryItemList(items) {
  return items
    .map(
      item =>
        `<a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}"></a>`
    )
    .join('');
}
galleryRefs.innerHTML = galleryItemList;

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captions: true,
  captionDelay: 250,
});
gallery.on('show.simplelightbox', function (items) {
  items.preventDefault();
});
