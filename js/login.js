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
        showMessage("Username dan Password wajib diisi", "red");
        return;
    }

    showLoading();
    console.log("Mulai login...");
console.log("Username:", username);

    try {

        const result = await apiPost("login", {
            username: username,
            password: password
        });

        hideLoading();

        if (result.status) {

            localStorage.setItem("TOKEN", result.token);
            localStorage.setItem("ROLE", result.role);
            localStorage.setItem("NAMA", result.nama);

            showMessage("Login berhasil", "green");

            setTimeout(function () {
                window.location.href = "dashboard.html";
            }, 800);

        } else {

            showMessage(result.message || "Login gagal", "red");

        }

    } catch (err) {

        hideLoading();
        alert(err.message);
console.log(err);

        showMessage("Tidak dapat terhubung ke server", "red");

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
