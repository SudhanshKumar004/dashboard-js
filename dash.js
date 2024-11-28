async function gather(){
    let get = await fetch("http://localhost:3000/Data")
    let data = await get.json()

    let print = data.map((i)=>`
            <tr>
                <td>${i.id}</td>
                <td>${i.name}</td>
                <td>${i.email}</td>
                <td>${i.age}</td>
                <td>${i.city}</td>
                <td>${i.number}</td>
                <td><button onclick="fordelete('${i.id}')">Delete</button></td>

            </tr>
        `).join("")

        document.querySelector('#output').innerHTML = print;
}

gather()

function fordelete(id){
    fetch(`http://localhost:3000/Data${id}`,
        {
        method: 'DELETE'
        }
    ).then(res=>alert("Deleted Successfully...!!"))
}