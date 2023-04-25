const container = document.querySelector("#container");

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#adauga").addEventListener("click", function() {

    const usr = document.getElementById("user_input").value;

    if (usr) {
      const task = document.createElement("p");
      task.classList.add("text-style");
      task.innerHTML = usr;
      container.appendChild(task);

      task.addEventListener("click", function() {
        task.classList.toggle("completed");
      });

      const deleteBtn = document.createElement("span");
      deleteBtn.classList.add("delete-task");
      deleteBtn.innerHTML = "x";
      task.appendChild(deleteBtn);

      deleteBtn.addEventListener("click", function() {
        task.remove();
      });

      document.getElementById("user_input").value = "";
    }
  });
});
