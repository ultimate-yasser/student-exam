let minutesRemain = document.getElementById("minutesRemain");
let secondsRemain = document.getElementById("secondsRemain");

let minuteTimer = setInterval(() => {
    let minutesRemainValue = parseInt(minutesRemain.textContent); // Use textContent to get the text inside the element
    minutesRemainValue -= 1;
    minutesRemain.innerText = minutesRemainValue.toString().padStart(2, '0'); // Update the displayed minutes

    if (minutesRemainValue <= 0) {
        clearInterval(minuteTimer); // Stop the timer if minutes reach zero
    }
}, 60000);

let secondTimer = setInterval(() => {
    let secondsRemainValue = parseInt(secondsRemain.textContent); // Use textContent to get the text inside the element
    secondsRemainValue -= 1;
    if (secondsRemainValue < 0) {
        secondsRemainValue = 59; // Reset seconds to 59 when reaching zero
    }
    secondsRemain.innerText = secondsRemainValue.toString().padStart(2, '0'); // Update the displayed seconds
}, 1000);
