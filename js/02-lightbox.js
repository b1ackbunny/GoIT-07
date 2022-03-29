import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery')
const galleryMarkup = createGalleryItems(galleryItems)


gallery.insertAdjacentHTML('beforeend', galleryMarkup )


function createGalleryItems(galleryItems) {
    return galleryItems
    .map(({preview, original,description}) => {
        return `<a class="gallery__item" href=${original}>
        <img class="gallery__image" src=${preview} alt=${description} />
      </a>`
    })
    .join('')
}


 let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionsDelay: 250})
