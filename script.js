document.getElementById("joinForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const member = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        passkey: document.getElementById("passkey").value,
        team: document.getElementById("team").value,
        bucket: document.getElementById("bucket").value,
        memberID: "AM-" + Date.now()
    };

    localStorage.setItem("amorytaMember", JSON.stringify(member));

    alert("🌱 Welcome to AMORYTA!");

    window.location.href = "welcome.html";

});
