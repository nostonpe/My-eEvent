// global imports
import './functionalities/navToggle.js';
import './functionalities/fixedNavArrow.js';
import './functionalities/footerDate.js';
import { displayLinks } from './functionalities/displayLinks.js';
import { displaySocial } from './functionalities/displaySocial.js';
import { linksUl, socialIcons } from './functionalities/utils/data.js';


window.addEventListener("DOMContentLoaded", () => {
    // global functions
    displayLinks(linksUl);
    displaySocial(socialIcons);

});