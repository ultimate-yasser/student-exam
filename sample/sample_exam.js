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

let form = document.forms["quiz"];
form.onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission to stay on the same page and see the alert

    let score = 0; // Initialize score inside the function to reset it for each submission

    let answer1 = document.getElementById("answer1");
    let answer6 = document.getElementById("answer6");
    let answer11 = document.getElementById("answer11");
    let answer16 = document.getElementById("answer16");

    if (answer1.checked) {
        score += 1;
    }
    if (answer6.checked) {
        score += 1;
    }
    if (answer11.checked) {
        score += 1;
    }
    if (answer16.checked) {
        score += 1;
    }

    alert("Your score is " + score);
};