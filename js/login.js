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
    alert("Login dijalankan");

    console.log(typeof apiPost);
    return;
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
