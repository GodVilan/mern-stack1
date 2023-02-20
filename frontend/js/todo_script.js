console.log("Hello From JS");

document.getElementById("loader").style.display = "block";

const inputBox = document.getElementById("inputBox");
inputBox.addEventListener("keydown", function(event){
    if(event.keyCode == 13){
        createTodo(inputBox.value);
    }
});

async function createTodo(text){
    await fetch("/api/todos", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({title: text})});
}

async function getAllTodos(){
    const todos = await fetch("/api/todos");
    const todolist = await todos.json();
    // alert(JSON.stringify(todolist));
    
}

getAllTodos();

fetch("/api/todos")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        document.getElementById("loader").style.display = "none";
        
    });

var light = true;
function setTheme(){
    if(light){
        document.documentElement.setAttribute("data-bs-theme", "dark");
        document.getElementById("themeButton").innerHTML = '<i class="fas fa-sun fa-lg fa-fw"></i>'

    }
    else{
        document.documentElement.setAttribute("data-bs-theme", "light");
        document.getElementById("themeButton").innerHTML = '<i class="fas fa-moon fa-lg fa-fw"></i>'

    }
    light = !light;
}


