// countdown.js

document.addEventListener("DOMContentLoaded", function () {
  console.log("Countdown script loaded and DOMContentLoaded event fired.");

  // Set the target date and time for the countdown
  // Format: 'YYYY-MM-DDTHH:mm:ss' (e.g., '2025-12-31T23:59:59')
  // Ganti dengan tanggal berakhir kompetisi Anda
  const targetDate = new Date("2025-09-20T23:59:59").getTime();
  console.log("Target Date (ms):", targetDate);

  // Get references to the countdown elements
  const daysElement = document.querySelector("#countdown-days");
  const hoursElement = document.querySelector("#countdown-hours");
  const minutesElement = document.querySelector("#countdown-minutes");
  const secondsElement = document.querySelector("#countdown-seconds");
  const competitionStatusElement = document.querySelector(
    "#competition-status"
  );

  console.log("Elements found:");
  console.log("Days Element:", daysElement);
  console.log("Hours Element:", hoursElement);
  console.log("Minutes Element:", minutesElement);
  console.log("Seconds Element:", secondsElement);
  console.log("Competition Status Element:", competitionStatusElement);

  /**
   * Updates the countdown timer and competition status.
   */
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    console.log("Update Countdown called. Distance (ms):", distance);

    // Calculate time components
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements
    if (daysElement) daysElement.textContent = days < 10 ? "0" + days : days;
    if (hoursElement)
      hoursElement.textContent = hours < 10 ? "0" + hours : hours;
    if (minutesElement)
      minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
    if (secondsElement)
      secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;

    // Update the competition status text
    if (distance < 0) {
      // Countdown is over
      clearInterval(countdownInterval); // Stop the interval
      if (daysElement) daysElement.textContent = "00";
      if (hoursElement) hoursElement.textContent = "00";
      if (minutesElement) minutesElement.textContent = "00";
      if (secondsElement) secondsElement.textContent = "00";

      if (competitionStatusElement) {
        competitionStatusElement.textContent = "Closed";
        competitionStatusElement.classList.remove("text-green-600");
        competitionStatusElement.classList.add("text-red-600");
      }
    } else {
      // Countdown is still active
      if (competitionStatusElement) {
        competitionStatusElement.textContent = "Open";
        competitionStatusElement.classList.remove("text-red-600");
        competitionStatusElement.classList.add("text-green-600");
      }
    }
  }

  // Update the countdown every 1 second
  const countdownInterval = setInterval(updateCountdown, 1000);

  // Initial call to display the countdown immediately
  updateCountdown();
});
