/*************************************************
 * SISWA
 *************************************************/

document.addEventListener(

    "DOMContentLoaded",

    function(){

        checkSession();

        loadSiswa();

    }

);
/*************************************************
 * LOAD DATA SISWA
 *************************************************/

async function loadSiswa(){

    try{

        const token=

        localStorage.getItem(

            "TOKEN"

        );

        const result=

        await apiPost(:"getsiswa",{

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
 * TABEL
 *************************************************/

function renderTable(data){

    let html="";

    data.forEach(function(item,index){

        html+=`

<tr>

<td>${index+1}</td>

<td>${item.nik}</td>

<td>${item.nama}</td>

<td>${item.jk}</td>

<td>${item.tingkatan}</td>

<td>

<button
onclick="editSiswa('${item.nik}')">

Edit

</button>

<button
onclick="hapusSiswa('${item.nik}')">

Hapus

</button>

</td>

</tr>

`;

    });

    document
    .getElementById(

        "tableSiswa"

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

"#tableSiswa tr"

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

.getElementById(

"sidebar"

)

.classList

.toggle(

"active"

);

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

!localStorage.getItem(

"TOKEN"

)

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

"Form tambah siswa akan dibuat pada tahap berikutnya."

);

}

function editSiswa(nik){

alert(

"Edit siswa : "+nik

);

}

function hapusSiswa(nik){

if(

confirm(

"Hapus siswa?"

)

){

alert(

"Data "+nik+" akan dihapus."

);

}

}
