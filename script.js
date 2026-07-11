/*
==========================================
AMORYTA Genesis
Room 001 – Identity Engine
File: script.js
Version: 1.0.0
Status: Active
==========================================
*/

const joinForm = document.getElementById("joinForm");

if (joinForm) {

    joinForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const constitution =
            document.getElementById("constitution").checked;

        if (!constitution) {

            alert("Please agree to the AMORYTA Constitution.");

            return;

        }

        const userData = {

            username:
                document.getElementById("username").value.trim(),

            displayName:
                document.getElementById("displayName").value.trim(),

            phone:
                document.getElementById("phone").value.trim(),

            passkey:
                document.getElementById("passkey").value,

            team:
                document.getElementById("team").value,

            bucket:
                document.getElementById("bucket").value.trim()

        };

        const result = await registerAmity(userData);

        if (result.success) {

            alert(
                "🌱 Welcome Home!\n\nYour Journey has begun."
            );

            window.location = "index.html";

        } else {

            alert(result.message);

        }

    });

}
