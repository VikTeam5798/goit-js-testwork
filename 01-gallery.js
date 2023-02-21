import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');


const makeGalleryMarkup = image => {
  const { preview, original, description } = image;

  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
};

const makeGallery = galleryItems.map(makeGalleryMarkup).join('');

gallery.insertAdjacentHTML('beforeend', makeGallery);

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}">
`,
    {
      onShow: () => {
        gallery.addEventListener('keydown', onEscKeyPress);
      },

      onClose: () => {
        gallery.removeEventListener('keydown', onEscKeyPress);
      },
    }
  );
  instance.show();

  function onEscKeyPress(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
}