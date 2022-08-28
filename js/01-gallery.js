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

let instance = '';

function onGalleryItemClick(event) {
    event.preventDefault();
    
    if(event.target.className !== "gallery__image") {
        return;
    }
    
    instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}">
    </div>
    `);
    instance.show();
    
    window.addEventListener('keydown', closeModalOnEsc);

    function closeModalOnEsc(event) {
        if (event.code === "Escape") {
        instance.close();
        };
    };
};






