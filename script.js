function updateClock() {
    const now = new Date(); // Get the current date and time
    const secondHand = document.querySelector('.second');
    const minuteHand = document.querySelector('.minute');
    const hourHand = document.querySelector('.hour');

    const seconds = now.getSeconds(); // Get the current seconds (0-59)
    const minutes = now.getMinutes(); // Get the current minutes (0-59)
    const hours = now.getHours();     // Get the current hours (0-23)

    // Calculate the degrees for each hand
    const secondsDegrees = ((seconds / 60) * 360) + 90;  // 360 degrees / 60 seconds
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90; // 6 degrees per second
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90; // 30 degrees per minute

    // Apply the rotation to each hand
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(updateClock, 1000); // Update the clock every second
updateClock(); // Initial call to set the clock immediately on load
