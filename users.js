/*************************************************
 * USERS
 *************************************************/

document.addEventListener(

    "DOMContentLoaded",

    function(){

        checkSession();

        loadUsers();

    }

);
/*************************************************
 * LOAD DATA USER
 *************************************************/

async function loadUsers(){

    try{

        const token=

        localStorage.getItem(

            "TOKEN"

        );

        const result=

        await apiPost({

            action:"getusers",

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
 * TABEL USER
 *************************************************/

function renderTable(data){

    let html="";

    data.forEach(function(item,index){

        html+=`

<tr>

<td>${index+1}</td>

<td>${item.username}</td>

<td>${item.nama}</td>

<td>${item.role}</td>

<td>${item.status}</td>

<td>

<button
onclick="editUser('${item.username}')">

Edit

</button>

<button
onclick="resetPassword('${item.username}')">

Reset

</button>

<button
onclick="hapusUser('${item.username}')">

Hapus

</button>

</td>

</tr>

`;

    });

    document
    .getElementById(

        "tableUsers"

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

"#tableUsers tr"

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

function openTambahUser(){

alert(

"Form tambah user akan dibuat pada tahap berikutnya."

);

}

function editUser(username){

alert(

"Edit user : "+username

);

}

function resetPassword(username){

alert(

"Reset password : "+username

);

}

function hapusUser(username){

if(

confirm(

"Hapus user ini?"

)

){

alert(

"User "+username+" akan dihapus."

);

}

}
