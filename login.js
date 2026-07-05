document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

const member = JSON.parse(localStorage.getItem("amorytaMember"));

const phone = document.getElementById("phone").value;

const passkey = document.getElementById("passkey").value;

if(member && member.phone === phone && member.passkey === passkey){

window.location.href = "welcome.html";

}else{

alert("🌱 We couldn't find your journey. Please check your PASSKEY or begin a new journey.");

}

});
