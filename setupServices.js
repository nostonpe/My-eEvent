import { setStorageItem } from './setStorageItem.js';


const setupServices = (services) => {
    let serviceCenter = services.map((blogArticle) => {
        const { id, title, category, img, smallDesc, mediumDesc, bigDesc } = blogArticle;
        return { id, title, category, img, smallDesc, mediumDesc, bigDesc };
    });
    setStorageItem('services', serviceCenter);
    // console.log(serviceCenter);
}

export { setupServices };