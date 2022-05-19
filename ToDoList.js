let add = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");
const value = inputField.value;

let taskList = [];
let storedTasks = JSON.parse(localStorage.taskList ?? '[]');

function addTodos() {
  taskList = storedTasks;
  for (let i = 0; i < storedTasks.length; i++) {
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");

    paragraph.innerText = storedTasks[i];
    toDoContainer.appendChild(paragraph);

    paragraph.addEventListener("click", function () {
      paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener("dblclick", function () {
      toDoContainer.removeChild(paragraph);
      for (let i = 0; i < taskList.length; i++) {
        //If we doubleclick we remove it from the the tasklist
        if (taskList[i] === paragraph.innerText) {
          taskList.splice(i, 1);
          break;
        } else {
          continue;
        }
      }
      taskList = storedTasks;
      localStorage.setItem("taskList", JSON.stringify(taskList));
    });
  }
}

add.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");

  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = " ";

  taskList.push(paragraph.innerText);
  localStorage.setItem("taskList", JSON.stringify(taskList));
  console.log(localStorage);

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  paragraph.addEventListener("dblclick", function () {
    for (var i = 0; i < taskList.length; i++) {
      if (taskList[i] === paragraph.innerText) {
        taskList.splice(i, 1);
      } 
    }
    localStorage.setItem("taskList", JSON.stringify(taskList));
    console.log(localStorage);
    toDoContainer.removeChild(paragraph);
  });
});

// Goes live at the beginning of the program

addTodos();
