/*************************************************
 * QR IURAN
 *************************************************/

document.addEventListener(

    "DOMContentLoaded",

    function(){

        checkSession();

        loadQR();

    }

);
/*************************************************
 * LOAD DATA QR
 *************************************************/

async function loadQR(){

    try{

        const token=

        localStorage.getItem(

            "TOKEN"

        );

        const result=

        await apiPost({

            action:"getqr",

            token:token

        });

        if(!result.status){

            logout();

            return;

        }

        document
        .getElementById("userName")
        .innerHTML=

        localStorage.getItem("NAMA");

        renderTable(

            result.data

        );

    }

    catch(err){

        console.log(err);

    }

}
/*************************************************
 * TABEL QR
 *************************************************/

function renderTable(data){

    let html="";

    data.forEach(function(item,index){

        html+=`

<tr>

<td>${index+1}</td>

<td>${item.nik}</td>

<td>${item.nama}</td>

<td>

<img
src="${item.qr}"
class="qr-image">

</td>

<td>${item.status}</td>

<td>

<button
onclick="cetakQR('${item.nik}')">

Cetak

</button>

<button
onclick="hapusQR('${item.nik}')">

Hapus

</button>

</td>

</tr>

`;

    });

    document
    .getElementById(

        "tableQR"

    )

    .innerHTML=html;

}
/*************************************************
 * SEARCH
 *************************************************/

document

.getElementById(

"search"

)

.addEventListener(

"keyup",

function(){

const key=

this.value

.toLowerCase();

const rows=

document.querySelectorAll(

"#tableQR tr"

);

rows.forEach(function(row){

row.style.display=

row.innerText

.toLowerCase()

.includes(key)

?

""

:

"none";

});

});
/*************************************************
 * MENU
 *************************************************/

function toggleSidebar(){

document
.getElementById("sidebar")
.classList
.toggle("active");

}

function goPage(page){

window.location.href=

page+".html";

}

function logout(){

localStorage.clear();

window.location.href=

"index.html";

}

function checkSession(){

if(

!localStorage.getItem("TOKEN")

){

window.location.href=

"index.html";

}

}
/*************************************************
 * ACTION
 *************************************************/

function generateQR(){

alert(

"Generate QR akan dibuat pada tahap berikutnya."

);

}

function cetakQR(nik){

alert(

"Cetak QR : "+nik

);

}

function hapusQR(nik){

if(

confirm(

"Hapus QR ini?"

)

){

alert(

"QR "+nik+" akan dihapus."

);

}

}
