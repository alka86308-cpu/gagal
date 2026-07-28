/
******************************************************
 * API CONFIG
 ******************************************************/

const API_URL =
"https://script.google.com/macros/s/AKfycbyLkrZB_2_sbn3qrjqDN6aGN3QxS8VcvvvWkDX15Ll3jrgpiurExvxKUWQ5_knZpZQN/exec";
/
******************************************************
 * API POST
 ******************************************************/

async function apiPost(action, data = {}) {

    const formData = new FormData();

    formData.append("action", action);

    Object.keys(data).forEach(function(key){

        formData.append(key, data[key]);

    });

    const response = await fetch(API_URL, {

        method: "POST",

        body: formData

    });

    return await response.json();

}
