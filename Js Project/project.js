
// Function to Update Current Time
function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // Convert 24hr to 12hr format
    document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
    document.getElementById("ampm").innerText = ampm;
}

setInterval(updateClock, 1000);
updateClock(); // Run Immediately

// Function to Change Messages & Image
document.getElementById("setAlarm").addEventListener("click", function() {
    let wakeTime = document.getElementById("wakeTime").value;
    let lunchTime = document.getElementById("lunchTime").value;
    let napTime = document.getElementById("napTime").value;
    let nightTime = document.getElementById("nightTime").value;
    
    let now = new Date();
    let currentHour = now.getHours();
    
    let greeting = document.getElementById("greeting");
    let status = document.getElementById("status");
    let clockImage = document.getElementById("clockImage");

    if (currentHour == wakeTime) {
        greeting.innerText = "GOOD MORNING!! WAKE UP!!";
        status.innerText = "Grab some healthy breakfast!!!";
        clockImage.src = "morning.png";
    } else if (currentHour == lunchTime) {
        greeting.innerText = "GOOD AFTERNOON!! LUNCH TIME!!";
        status.innerText = "Have a delicious meal!";
        clockImage.src = "lunch.png";
    } else if (currentHour == napTime) {
        greeting.innerText = "GOOD EVENING!! NAP TIME!!";
        status.innerText = "Take a short nap to refresh.";
        clockImage.src = "nap.png";
    } else if (currentHour == nightTime) {
        greeting.innerText = "GOOD NIGHT!! SLEEP WELL!!";
        status.innerText = "Have a peaceful sleep!";
        clockImage.src = "night.png";
    } else {
        greeting.innerText = "HELLO!!";
        status.innerText = "Enjoy your time!";
        clockImage.src = "default.png";
    }
});
