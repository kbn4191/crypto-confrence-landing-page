// Set the date we're counting down to
const countdownDate = new Date('2023-12-31T23:59:59').getTime();

// Update the countdown every second
const countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = 'Countdown expired!';
    }
}, 1000);
