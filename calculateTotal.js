const calculateTotal = () => {
    const crowd = parseInt(document.getElementById("crowd").value);
    const staffNumber = parseInt(document.getElementById("staffNumber").value);
    const eventDays = parseInt(document.getElementById("eventDays").value);
    const result = document.querySelector(".final-cost-container");

    let staffNumberCost = 0;
    let workingHours = 0;
    let costOfTotalDays = 0;
    let totalSupply = 0;
    let totalCost = 0;

    if (crowd && staffNumber && eventDays) {

        if (crowd <= 500) {
            // Total hours that staff is going to work
            workingHours = eventDays * 8;

            // Total price that staff is going to take
            staffNumberCost = staffNumber * 10 * workingHours;

            // Total price for eventDays
            costOfTotalDays = 500 * eventDays;

            // Total supply for all crowd
            totalSupply = crowd * 0.5;

            // Total cost
            totalCost = staffNumberCost + costOfTotalDays + totalSupply;


        } else if (crowd >= 501 & crowd <= 1000) {
            workingHours = eventDays * 8;
            staffNumberCost = staffNumber * 8 * workingHours;
            costOfTotalDays = 400 * eventDays;
            totalSupply = crowd * 0.4;
            // Total cost
            totalCost = staffNumberCost + costOfTotalDays + totalSupply;
        } else if (crowd >= 1001 & crowd <= 1500) {
            workingHours = eventDays * 8;
            staffNumberCost = staffNumber * 6 * workingHours;
            costOfTotalDays = 300 * eventDays;
            totalSupply = crowd * 0.3;
            // Total cost
            totalCost = staffNumberCost + costOfTotalDays + totalSupply;
        } else if (crowd >= 1501 & crowd <= 2000) {
            workingHours = eventDays * 8;
            staffNumberCost = staffNumber * 5 * workingHours;
            costOfTotalDays = 200 * eventDays;
            totalSupply = crowd * 0.2;
            // Total cost
            totalCost = staffNumberCost + costOfTotalDays + totalSupply;
        } else {
            workingHours = eventDays * 8;
            staffNumberCost = staffNumber * 4 * workingHours;
            costOfTotalDays = 100 * eventDays;
            totalSupply = crowd * 0.15;
            // Total cost
            totalCost = staffNumberCost + costOfTotalDays + totalSupply;
        }

        result.innerHTML = `<p id ="cost-result">Συνολικό κόστος:<span id ="cost-value"> ${totalCost} &euro;</span></p>`;
    } else {
        alert('Παρακαλώ συμπληρώστε όλα τα απαραίτητα πεδία για τον υπολογισμό του κόστους του συνεδρίου');
    }


    return totalCost;
}

export { calculateTotal };