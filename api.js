/*
=========================================================
AMORYTA Genesis
ROOM 006
API BRIDGE
Version : 1.0.0
Status  : Active
=========================================================
*/

/*
=========================================================
POST REQUEST
=========================================================
*/

async function postRequest(data) {

  const response = await fetch(CONFIG.API_URL, {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(data)

  });

  return await response.json();

}


/*
=========================================================
REGISTER AMITY
=========================================================
*/

async function registerAmity(userData) {

  try {

    const result = await postRequest(userData);

    return result;

  } catch (error) {

    return {

      success: false,

      message: "Unable to connect to AMORYTA server."

    };

  }

}
