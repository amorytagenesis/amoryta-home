/*
==========================================
AMORYTA Genesis
Room 001 – Identity Engine
File: auth.js
Version: 1.0.0
Status: Active
==========================================
*/

async function registerAmity(userData) {

    try {

        const response = await fetch(CONFIG.API_URL, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                action: "register",

                data: userData

            })

        });

        const result = await response.json();

        return result;

    }

    catch (error) {

        console.error(error);

        return {

            success: false,

            message: "Unable to connect to AMORYTA."

        };

    }

}
