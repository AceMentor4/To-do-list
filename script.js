function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      var task = document.createElement("li");
      task.textContent = taskInput.value;
      task.addEventListener("click", toggleTask);
  
      taskList.appendChild(task);
      taskInput.value = "";
    }
  }
  
  function toggleTask() {
    this.classList.toggle("completed");
  }
  