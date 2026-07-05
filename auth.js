document.getElementById("joinForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const member = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        passkey: document.getElementById("passkey").value,
        team: document.getElementById("team").value,
        bucket: document.getElementById("bucket").value
    };

    // Save member to browser
    localStorage.setItem("amorytaMember", JSON.stringify(member));

    // Go to Welcome page
    window.location.href = "welcome.html";
});
