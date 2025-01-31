/* ___________________________________________________________________________________ confirmation-box */
function getQueryParams(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.getElementById("confirm-location").textContent = getQueryParams("location");
document.getElementById("confirm-checkin").textContent = getQueryParams("checkin");
document.getElementById("confirm-checkout").textContent = getQueryParams("checkout");
document.getElementById("confirm-guests").textContent = getQueryParams("guests");
