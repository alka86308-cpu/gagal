/*************************************************
 * LOGIN
 *************************************************/

document.addEventListener("DOMContentLoaded", function () {

    checkLogin();

    document.getElementById("password")
        .addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                login();
            }
        });

});


/*************************************************
 * PROSES LOGIN
 *************************************************/

async function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Username dan Password wajib diisi");
        return;
    }

    try {

        const result = await apiPost("login", {
            username: username,
            password: password
        });

        // DEBUG
        alert(JSON.stringify(result));
        return;

        if (result.status) {

            localStorage.setItem("TOKEN", result.token);
            localStorage.setItem("ROLE", result.role);
            localStorage.setItem("NAMA", result.nama);

            window.location.href = "dashboard.html";

        } else {

            alert(result.message);

        }

    } catch (err) {

        alert(err.message);
        console.error(err);

    }

}


/*************************************************
 * CEK LOGIN
 *************************************************/

function checkLogin() {

    const token = localStorage.getItem("TOKEN");

    if (token) {
        window.location.href = "dashboard.html";
    }

}
