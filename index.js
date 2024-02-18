// ---------- BANNER TO P.H PARIBAHAN SECTION Button ----------
function buyTickets() {
    const buyTickets = document.getElementById('ph-paribahan');
    buyTickets.scrollIntoView({ behavior: 'smooth' });
}

// ---------- SELECT YOUR SEAT SECTION ----------
const allSeat = document.getElementsByClassName('bus_seat');
let decrement = 40;
let increment = 0;

for (const seat of allSeat) {
    seat.addEventListener('click', function () {
        decrement = decrement - 1;
        document.getElementById('seat-decrement').innerText = decrement;

        increment = increment + 1;
        const incrementButton = document.getElementById('seat-increment');
        incrementButton.classList.remove('hidden');
        incrementButton.innerText = increment;
    });
}

// ---------- NEXT and CONTINUE Button ----------
function hideElement(hide) {
    const hideElement = document.getElementById(hide);
    hideElement.classList.add('hidden');
}

function showElement(show) {
    const showElement = document.getElementById(show);
    showElement.classList.remove('hidden');
}

function apply() {
    hideElement('navigation');
    hideElement('header');
    hideElement('ph-paribahan');
    hideElement('offer-section');
    showElement('success-section');
}

function back(){
    showElement('navigation');
    showElement('header');
    showElement('ph-paribahan');
    showElement('offer-section');
    hideElement('success-section');
}