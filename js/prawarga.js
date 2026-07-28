/*************************************************
 * PRAWARGA
 *************************************************/

document.addEventListener(

    "DOMContentLoaded",

    function(){

        checkSession();

        loadPrawarga();

    }

);
/*************************************************
 * LOAD DATA PRAWARGA
 *************************************************/

async function loadPrawarga(){

    try{

        const token=

        localStorage.getItem(

            "TOKEN"

        );

        const result=

        await apiPost({

            action:"getprawarga",

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

<td>${item.tingkat}</td>

<td>${item.status}</td>

<td>

<button
onclick="editPrawarga('${item.nik}')">

Edit

</button>

<button
onclick="hapusPrawarga('${item.nik}')">

Hapus

</button>

</td>

</tr>

`;

    });

    document
    .getElementById(

        "tablePrawarga"

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

"#tablePrawarga tr"

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

"Form tambah prawarga akan dibuat pada tahap berikutnya."

);

}

function editPrawarga(nik){

alert(

"Edit prawarga : "+nik

);

}

function hapusPrawarga(nik){

if(

confirm(

"Hapus data prawarga?"

)

){

alert(

"Data "+nik+" akan dihapus."

);

}

}
