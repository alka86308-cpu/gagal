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
/
******************************************************
 * API GET
 ******************************************************/

async function apiGet(action, data = {}) {

    const params = new URLSearchParams();

    params.append("action", action);

    Object.keys(data).forEach(function(key){

        params.append(key, data[key]);

    });

    const response = await fetch(

        API_URL + "?" + params.toString()

    );

    return await response.json();

    }
/
******************************************************
 * API SAFE REQUEST
 ******************************************************/

async function apiRequest(method, action, data = {}) {

    try{

        if(method === "GET"){

            return await apiGet(action, data);

        }

        return await apiPost(action, data);

    }

    catch(error){

        console.error(error);

        return {

            status:false,

            message:"Gagal terhubung ke server."

        };

apiPost("getsiswa", {
    token: token
});
        
    }

    }
apiPost({
    action: "getsiswa",
    token: token
});
