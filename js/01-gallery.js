import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryContainer = document.querySelector(".gallery");
const galleryItemsCollection = createGalleryItemsCollection(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsCollection);

function createGalleryItemsCollection(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
    }).join('');

};

galleryContainer.addEventListener('click', onGalleryItemClick);



function onGalleryItemClick(event) {
    event.preventDefault();
    
    basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}">
    </div>
`).show();
};



