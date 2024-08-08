let countdown;

function startCountdown() {
    const datetimePicker = document.getElementById('datetime-picker');
    const targetDate = new Date(datetimePicker.value).getTime();

    // Clear any existing countdown to avoid overlapping intervals
    clearInterval(countdown);

    countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            clearInterval(countdown);
            document.getElementById('days').querySelector('.number').textContent = '0';
            document.getElementById('hours').querySelector('.number').textContent = '0';
            document.getElementById('minutes').querySelector('.number').textContent = '0';
            document.getElementById('seconds').querySelector('.number').textContent = '0';
            alert("Countdown finished!");
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').querySelector('.number').textContent = days;
        document.getElementById('hours').querySelector('.number').textContent = hours;
        document.getElementById('minutes').querySelector('.number').textContent = minutes;
        document.getElementById('seconds').querySelector('.number').textContent = seconds;
    }, 1000);
}

document.getElementById('start-button').addEventListener('click', startCountdown);
