
//Data Collection
async function gather(){
    let get = await fetch("http://localhost:3000/Data")
    let data = await get.json()

    let print = data.map((i)=>`

    <style>
        tr{
        border-bottom: 1px black solid;
        }
    </style>
            <tr>
                <td>${i.id}</td>
                <td>${i.name}</td>
                <td>${i.email}</td>
                <td>${i.age}</td>
                <td>${i.city}</td>
                <td>${i.number}</td>
                <td><button><i class="fa-solid fa-eye" style="color:green;font-size:20px;background-color:white"></i></button></td>
                <td><button id="" onclick="fordelete('${i.id}')"><i class="fa-solid fa-trash" style="color:red;font-size:20px;background-color:white"></i>
                </button></td>
                <td><button onclick="myedit('${i.id}')"><i class="fa-solid fa-pen" style="color:gold;font-size:20px;background-color:white"></i></button></td>

            </tr>
        `).join(" ")

        document.querySelector('#output').innerHTML = print;
}

gather()

//Delete Function
function fordelete(id){

    let confirm = window.confirm("Confirm Delete")
    if(confirm){
    fetch(`http://localhost:3000/Data/${id}`,
        {
        method: "DELETE"
        }
    ).then(res=>alert("Deleted Successfully...!!"))
    }
    else{
        alert("Invalid Click")
    }
}


//Edit Function
async function myedit(id){
    let myupdate = await fetch(`http://localhost:3000/Data/${id}`)
    let redata = await myupdate.json();
    let senddata = `
    <style>
        input{
            align-items:center;
        }
    </style>
    <input type="text" value="${redata.id}" readonly><br>
    <input type="text" value="${redata.name}" id="name1" ><br>
    <input type="text" value="${redata.email}" id="email1" ><br>
    <input type="text" value="${redata.age}" id="age1" ><br>
    <input type="text" value="${redata.city}" id="city1" ><br>
    <input type="text" value="${redata.number}" id="number1" ><br>
    <input type="submit" onclick="finalupdate('${redata.id}')">
    `
    document.querySelector('#edittable').innerHTML = senddata;
}

async function finalupdate(id)
{
    let fdata = {
        name: document.querySelector('#name1').value,
        email: document.querySelector('#email1').value,
        age: document.querySelector('#age1').value,
        city: document.querySelector('#city1').value,
        number: document.querySelector('#number1').value
    }
    await fetch(`http://localhost:3000/Data/${id}`,
    {
        method: 'PUT',
        Headers:{
            'content-type': 'application/json'
            },
        body:JSON.stringify(fdata)
    }).then(re=>alert("Data Updated"))
}

function showform()
{
    let selectform = document.querySelector('#addform');
    selectform.style.display = "block";
}

function close()
{
     let selectform = document.querySelector('#addform');
    selectform.style.display = "none";
}


//Add Function
function add()
{
    let addeddata = {
    name : document.querySelector('#addname').value,
    email : document.querySelector('#addemail').value,
    age : document.querySelector('#addage').value,
    city : document.querySelector('#addcity').value,
    number : document.querySelector('#addnumber').value
    }

    fetch("http://localhost:3000/Data",
        {
        method:'POST',
        Headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(addeddata)
    }
    ).then(res=>alert("Data Added Successfully"))
}



