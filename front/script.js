let button = document.getElementById("handleSubmit")

button.onclick = async function() {
    let title = document.getElementById("title").ariaValueMax;
    let description = document.getElementById("discription").value;
    let data = {title, description}


    const response = await fetch('http://localhost:3001/api/store/task', {
        method: "post",
        headers: {"content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if(content.success){
        alert("Sucesso");
    }else{
        alert("Não");
    }
}