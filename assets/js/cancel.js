function getQueryParams(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function displayCancellationDetails() {
    document.getElementById("cancel-checkin").textContent = getQueryParams("checkin") || "N/A";
    document.getElementById("cancel-checkout").textContent = getQueryParams("checkout") || "N/A";
    document.getElementById("cancel-guests").textContent = getQueryParams("guests") || "N/A";
}

document.addEventListener("DOMContentLoaded", displayCancellationDetails);

function cancelBooking() {
    var checkin = document.getElementById("check-in").value;
    var checkout = document.getElementById("check-out").value;
    var guests = document.getElementById("guests").value;

    if (!checkin || !checkout || !guests) {
        alert("Please fill in all cancellation fields.");
        return;
    }

    var cancellationURL = `cancellation.html?checkin=${checkin}&checkout=${checkout}&guests=${encodeURIComponent(guests)}`;
    window.location.href = cancellationURL;
}
