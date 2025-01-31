/* ___________________________________________________________________________________ HEADER MOBILE (<728px) */
function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("show");
}

/* ___________________________________________________________________________________ HEADER DESKTOP (>=728px) */
document.getElementById("menuIcon").addEventListener("click", function () {
    var dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function (event) {
    var menuIcon = document.getElementById("menuIcon");
    var dropdown = document.getElementById("dropdownMenu");

    if (!menuIcon.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});
/* ___________________________________________________________________________________ SEARCH CONTAINER */
function toggleGuestDropdown() {
    var dropdown = document.getElementById("guestsDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function setGuests(number) {
    document.getElementById("guests").value = number + " Guests";
    document.getElementById("guestsDropdown").style.display = "none";
}

function search() {
    var location = document.getElementById("location").value;
    var checkin = document.getElementById("checkin").value;
    var checkout = document.getElementById("checkout").value;
    var guests = document.getElementById("guests").value;

    if (!location || !checkin || !checkout || !guests) {
        alert("Please fill in all search fields.");
        return;
    }

    var confirmationURL = `confirmation.html?location=${encodeURIComponent(location)}&checkin=${checkin}&checkout=${checkout}&guests=${encodeURIComponent(guests)}`;
    window.location.href = confirmationURL;
}

function getQueryParams(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function displayConfirmationDetails() {
    if (document.getElementById("confirm-location")) {
        document.getElementById("confirm-location").textContent = getQueryParams("location") || "N/A";
        document.getElementById("confirm-checkin").textContent = getQueryParams("checkin") || "N/A";
        document.getElementById("confirm-checkout").textContent = getQueryParams("checkout") || "N/A";
        document.getElementById("confirm-guests").textContent = getQueryParams("guests") || "N/A";
    }
}

document.addEventListener("click", function (event) {
    var dropdown = document.getElementById("guestsDropdown");
    var guestsInput = document.getElementById("guests");

    if (dropdown && guestsInput) {
        if (!guestsInput.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = "none";
        }
    }
});

document.addEventListener("DOMContentLoaded", displayConfirmationDetails);
