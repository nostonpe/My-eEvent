// global imports
import './functionalities/navToggle.js';
import './functionalities/fixedNavArrow.js';
import './functionalities/footerDate.js';
import { displayLinks } from './functionalities/displayLinks.js';
import { displaySocial } from './functionalities/displaySocial.js';
import { linksUl, socialIcons } from './functionalities/utils/data.js';

//local imports
import { valuesCost } from './functionalities/utils/data.js';
import { calculateTotal } from './functionalities/calculateTotal.js';
import { openCostModal } from './functionalities/openCostModal.js';
import { displayTableCost } from './functionalities/displayTableCost.js';


window.addEventListener("DOMContentLoaded", () => {
    // global functions
    displayLinks(linksUl);
    displaySocial(socialIcons);

    // local functions
    displayTableCost(valuesCost);

});


const costBtn = document.querySelector(".btnCost");
costBtn.addEventListener("click", () => {
    // local functions
    calculateTotal();
    openCostModal();
});