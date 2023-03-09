// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const createGalleryMarcUp = () => galleryItems.map((image) =>
    `<div class="gallery__item">
        <a class="gallery__link" href="${image.original}">
            <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
            />
        </a>
    </div>`
).join("");
    

galleryContainer.insertAdjacentHTML('beforeend', createGalleryMarcUp());

galleryContainer.addEventListener('click', onImage);

function onImage(evt) {
    evt.preventDefault();
    console.log(evt.target.nodeName)
    if (evt.target.nodeName !== "IMG") {
        return;
    };
    const imageSelected = evt.target.getAttribute("data-source");
    if (!imageSelected){return;}
    console.log(imageSelected);

    new SimpleLightbox('.gallery a', { captionDelay: 250, captionPosition: 'bottom', docClose: true});
        
    
};