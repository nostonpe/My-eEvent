// global imports
import './functionalities/navToggle.js';
import './functionalities/fixedNavArrow.js';
import './functionalities/footerDate.js';
import { displayLinks } from './functionalities/displayLinks.js';
import { displaySocial } from './functionalities/displaySocial.js';
import { linksUl, socialIcons } from './functionalities/utils/data.js';

// local imports
import { getStorageItem } from './functionalities/Storage/getStorageItem.js';
import { displaySingleService } from './functionalities/displaySingleService.js';





window.addEventListener("DOMContentLoaded", () => {
    displayLinks(linksUl);
    displaySocial(socialIcons);
});


let servicesStorage = getStorageItem('services');

window.addEventListener('DOMContentLoaded', () => {
    displaySingleService(servicesStorage);
})