// todolist.js

function addTodo() {
    var input = document.getElementById("todo-input");
    var task = input.value;
    if (task.trim() !== "") {
        var ul = document.getElementById("todos");
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        var textNode = document.createTextNode(task);
        
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            ul.removeChild(li);
        };
        deleteButton.style.color = "black";

        var updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.onclick = function() {
            var newText = prompt("Edit your task:", textNode.textContent);
            if (newText.trim() !== "") {
                textNode.textContent = newText;
            }
        };
        updateButton.style.color = "black";

        li.appendChild(checkbox);
        li.appendChild(textNode);
        li.appendChild(deleteButton);
        li.appendChild(updateButton);
        
        ul.appendChild(li);
        input.value = "";
    } else {
        alert("Please enter a task!");
    }
}
