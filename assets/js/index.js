function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("show");
}

document.getElementById("menuIcon").addEventListener("click", function () {
    var dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Chiude il menu se si clicca fuori
document.addEventListener("click", function (event) {
    var menuIcon = document.getElementById("menuIcon");
    var dropdown = document.getElementById("dropdownMenu");
    if (!menuIcon.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});