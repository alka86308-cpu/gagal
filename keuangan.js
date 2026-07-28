/*************************************************
 * KEUANGAN
 *************************************************/

document.addEventListener(

    "DOMContentLoaded",

    function(){

        checkSession();

        loadKeuangan();

    }

);
/*************************************************
 * LOAD DATA KEUANGAN
 *************************************************/

async function loadKeuangan(){

    try{

        const token=

        localStorage.getItem(

            "TOKEN"

        );

        const result=

        await apiPost({

            action:"getkeuangan",

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

        document
        .getElementById("saldoKas")
        .innerHTML=

        "Rp "+result.saldo;

        document
        .getElementById("totalMasuk")
        .innerHTML=

        "Rp "+result.masuk;

        document
        .getElementById("totalKeluar")
        .innerHTML=

        "Rp "+result.keluar;

        renderTable(

            result.data

        );

    }

    catch(err){

        console.log(err);

    }

}
/*************************************************
 * TABEL
 *************************************************/

function renderTable(data){

    let html="";

    data.forEach(function(item){

        html+=`

<tr>

<td>${item.tanggal}</td>

<td>${item.keterangan}</td>

<td>${item.jenis}</td>

<td>Rp ${item.nominal}</td>

<td>

<button
onclick="editTransaksi('${item.id}')">

Edit

</button>

<button
onclick="hapusTransaksi('${item.id}')">

Hapus

</button>

</td>

</tr>

`;

    });

    document
    .getElementById(

        "tableKeuangan"

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

"#tableKeuangan tr"

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

function openTambah(){

alert(

"Form transaksi akan dibuat pada tahap berikutnya."

);

}

function editTransaksi(id){

alert(

"Edit transaksi : "+id

);

}

function hapusTransaksi(id){

if(

confirm(

"Hapus transaksi?"

)

){

alert(

"Data transaksi "+id+" akan dihapus."

);

}

}
