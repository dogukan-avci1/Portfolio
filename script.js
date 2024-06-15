document.addEventListener("DOMContentLoaded", function () {
    // Form validation
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            event.preventDefault();
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Theme toggle
    var toggleButton = document.createElement("button");
    toggleButton.innerHTML = "Toggle Theme";
    toggleButton.style.position = "fixed";
    toggleButton.style.bottom = "10px";
    toggleButton.style.right = "10px";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
    });
});