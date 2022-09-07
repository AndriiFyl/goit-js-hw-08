
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems); 


const galleryContainer = document.querySelector('.gallery');



const imgMarkup = creatElements(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imgMarkup);

function creatElements(galleryParam) {
    return  galleryParam
        .map(
      ({ preview, original, description }) => 
        `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div>`
    )
    .join('') }


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
