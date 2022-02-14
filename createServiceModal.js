import { displayModalItem } from './displayModalItem.js';

const createServiceModal = () => {
    const modalServiceContainer = document.querySelector('.modal-services-container');
    const serviceImges = [...document.querySelectorAll('.service-img')];
    serviceImges.forEach((serviceImg) => {
        serviceImg.addEventListener('click', () => {
            // console.log(serviceImg);
            modalServiceContainer.classList.add('show-service-modal')
            displayModalItem(serviceImg, modalServiceContainer);
            const closeServiceModalBtn = document.querySelector('.close-btn');
            closeServiceModalBtn.addEventListener('click', () => {
                modalServiceContainer.classList.remove('show-service-modal');
            })
        })
    })
}

export { createServiceModal };