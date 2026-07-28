/*************************************************
 * WARGA
 *************************************************/

document.addEventListener(

    "DOMContentLoaded",

    function(){

        checkSession();

        loadWarga();

    }

);
/*************************************************
 * LOAD DATA WARGA
 *************************************************/

async function loadWarga(){

    try{

        const token=

        localStorage.getItem(

            "TOKEN"

        );

        const result=

        await apiPost({

            action:"getwarga",

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

<td>${item.rayon}</td>

<td>${item.status}</td>

<td>

<button
onclick="editWarga('${item.nik}')">

Edit

</button>

<button
onclick="hapusWarga('${item.nik}')">

Hapus

</button>

</td>

</tr>

`;

    });

    document
    .getElementById(

        "tableWarga"

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

"#tableWarga tr"

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

"Form tambah warga akan dibuat pada tahap berikutnya."

);

}

function editWarga(nik){

alert(

"Edit warga : "+nik

);

}

function hapusWarga(nik){

if(

confirm(

"Hapus data warga?"

)

){

alert(

"Data "+nik+" akan dihapus."

);

}

}
