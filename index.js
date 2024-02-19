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
        // Seat DECREMENT
        decrement = decrement - 1;
        document.getElementById('seat-decrement').innerText = decrement;

        // Seat INCREMENT
        increment = increment + 1;
        const incrementButton = document.getElementById('seat-increment');
        incrementButton.classList.remove('hidden');
        incrementButton.innerText = increment;

        // Seat DETAILS
        const seatName = seat.innerText;
        const seatClass = 'Economy';
        const seatPrice = 550;

        const rows = document.getElementById('table-rows');
        const tableRow = document.createElement('tr');
        tableRow.classList.add('text-[#03071280]', 'font-normal');
        rows.appendChild(tableRow);

        const tableDataSeat = document.createElement('td');
        tableDataSeat.innerText = seatName;
        tableRow.appendChild(tableDataSeat);

        const tableDataClass = document.createElement('td');
        tableDataClass.innerText = seatClass;
        tableRow.appendChild(tableDataClass);

        const tableDataPrice = document.createElement('td');
        tableDataPrice.innerText = seatPrice;
        tableRow.appendChild(tableDataPrice);

        // TOTAL PRICE
        const totalPrice = document.getElementById('total-price').innerText;
        const convertedTotalPrice = parseInt(totalPrice);

        document.getElementById('total-price').innerText = convertedTotalPrice + seatPrice;

        // GRAND TOTAL
        const grandTotalElement = document.getElementById('grand-total');
        let convertedGrandTotal = parseInt(grandTotalElement.innerText);

        document.getElementById('grand-total').innerText = convertedGrandTotal + seatPrice;

        // COUPON BOX
        const couple = 'Couple 20';
        const new15 = 'NEW15';

        const couponApply = document.getElementById('coupon-apply');
        couponApply.addEventListener('click', function () {
            const couponField = document.getElementById('coupon-field').value;
            if (couponField === couple) {
                convertedGrandTotal *= 0.80; // Apply 20% discount
            } else if (couponField === new15) {
                convertedGrandTotal *= 0.85; // Apply 15% discount
            } else {
                alert('Invalid Coupon Code');
            }
            grandTotalElement.innerText = convertedGrandTotal.toFixed(2);
        });

        this.classList.add('bg-[#1dd100]', 'text-white');

        let selectedSeats = document.querySelectorAll('.bg-[#1dd100]');

        if (selectedSeats.length >= 4) {
            alert('You cannot buy more seats');
        }
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

function back() {
    showElement('navigation');
    showElement('header');
    showElement('ph-paribahan');
    showElement('offer-section');
    hideElement('success-section');
}