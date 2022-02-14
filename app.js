// global imports
import './functionalities/navToggle.js';
import './functionalities/fixedNavArrow.js';
import './functionalities/footerDate.js';
import { displayLinks } from './functionalities/displayLinks.js';
import { displaySocial } from './functionalities/displaySocial.js';
import { linksUl, socialIcons } from './functionalities/utils/data.js';


// local imports
import { services } from './functionalities/utils/data.js';
import { displayServiceItems } from './functionalities/displayServiceItems.js';
import { setupServices } from './functionalities/Storage/setupServices.js';


window.addEventListener("DOMContentLoaded", () => {

    // global functions
    displayLinks(linksUl);
    displaySocial(socialIcons);

    // local functions
    setupServices(services);
    displayServiceItems(services);

});


function Gallery(element) {
    this.container = element;
    this.list = [...element.querySelectorAll('.galleryImg')];
    this.modal = document.querySelector('.gallery-modal');
    this.modalImg = document.querySelector('.main-gallery-img');
    this.modalImges = document.querySelector('.gallery-modal-images-container');
    this.closeBtn = document.querySelector('.modal-gallery-close-btn');
    this.nextBtn = document.querySelector('.next-btn');
    this.prevBtn = document.querySelector('.prev-btn');

    this.closeModal = this.closeModal.bind(this);
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
    this.chooseImage = this.chooseImage.bind(this);
    // container event
    this.container.addEventListener('click', function(e) {
        if (e.target.classList.contains('img')) {
            this.openModal(e.target, this.list);
        }
        console.log(this);
        // self.openModal();
    }.bind(this));
}

Gallery.prototype.openModal = function(selectedImage, list) {
    // console.log(selectedImage, list);

    const body = document.body;
    body.style.overflowY = "hidden";

    const topLink = document.querySelector('.scroll-link');
    topLink.classList.remove('show-top-link');

    this.setMainImage(selectedImage);
    this.modalImges.innerHTML = list.map(function(image) {
        return `<img src="${image.src}"
         data-id="${image.dataset.id}" class="${selectedImage.dataset.id ===image.dataset.id?"gallery-modal-img selected":"gallery-modal-img"}">`;
    }).join("");
    this.modal.classList.add('open');
    this.closeBtn.addEventListener('click', this.closeModal);
    this.nextBtn.addEventListener('click', this.nextImg);
    this.prevBtn.addEventListener('click', this.prevImg);
    this.modalImges.addEventListener('click', this.chooseImage);
};
Gallery.prototype.setMainImage = function(selectedImage) {
    this.modalImg.src = selectedImage.src;
}

Gallery.prototype.closeModal = function() {

    const body = document.body;
    body.style.overflowY = "initial";

    const topLink = document.querySelector('.scroll-link');
    topLink.classList.add('show-top-link');

    this.modal.classList.remove('open');
    this.closeBtn.removeEventListener('click', this.closeModal);
    this.nextBtn.removeEventListener('click', this.nextImg);
    this.prevBtn.removeEventListener('click', this.prevImg);
    this.modalImges.removeEventListener('click', this.chooseImage);
}
Gallery.prototype.nextImg = function() {
    const selected = this.modalImges.querySelector('.selected');
    const next = selected.nextElementSibling || this.modalImges.firstElementChild;
    selected.classList.remove('selected');
    next.classList.add('selected');
    this.setMainImage(next);
}
Gallery.prototype.prevImg = function() {
    const selected = this.modalImges.querySelector('.selected');
    const prev = selected.previousElementSibling || this.modalImges.lastElementChild;
    selected.classList.remove('selected');
    prev.classList.add('selected');
    this.setMainImage(prev);
}

Gallery.prototype.chooseImage = function(e) {
    if (e.target.classList.contains('gallery-modal-img')) {
        const selected = this.modalImges.querySelector('.selected')
        selected.classList.remove('selected');

        this.setMainImage(e.target);
        e.target.classList.add('selected');

    }
}

const gallery = new Gallery(document.querySelector('.imgGallery-content'));