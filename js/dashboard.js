/*************************************************
 * DASHBOARD
 *************************************************/

document.addEventListener(

    "DOMContentLoaded",

    function(){

        checkSession();

        loadDashboard();

    }

);
/*************************************************
 * LOAD DASHBOARD
 *************************************************/

async function loadDashboard(){

    try{

        const token=

        localStorage.getItem(

            "TOKEN"

        );
        const result = await apiPost("dashboard", {
    token: token
});

        if(!result.status){

            logout();

            return;

        }

        document
        .getElementById("userName")
        .innerHTML=

        localStorage.getItem("NAMA");

        document
        .getElementById("totalSiswa")
        .innerHTML=

        result.data.siswa;

        document
        .getElementById("totalWarga")
        .innerHTML=

        result.data.warga;

        document
        .getElementById("totalKas")
        .innerHTML=

        "Rp "+result.data.kas;

        document
        .getElementById("totalQR")
        .innerHTML=

        result.data.qr;

    }

    catch(err){

        console.log(err);

    }

          }
/*************************************************
 * TOGGLE SIDEBAR
 *************************************************/

function toggleSidebar(){

    document

    .getElementById(

        "sidebar"

    )

    .classList

    .toggle(

        "active"

    );

}
/*************************************************
 * PINDAH HALAMAN
 *************************************************/

function goPage(page){

    window.location.href=

    page+".html";

}
/*************************************************
 * LOGOUT
 *************************************************/

function logout(){

    localStorage.clear();

    window.location.href=

    "index.html";

}
/*************************************************
 * CEK SESSION
 *************************************************/

function checkSession(){

    const token=

    localStorage.getItem(

        "TOKEN"

    );

    if(!token){

        window.location.href=

        "index.html";

    }

      }
