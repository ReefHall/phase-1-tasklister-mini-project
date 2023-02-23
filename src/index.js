document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
  const input = document.getElementById("new-task-description")
  const ul = document.getElementById("tasks")

  const dropDown = document.getElementById("dropdown")

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const list = document.createElement("li")
    ul.append(list);
    list.innerText = input.value;
    const button = document.createElement("button")
    list.append(button)
    button.innerText = "DELETE";
    button.addEventListener("click", () => {
      list.remove();
      
       
    })
    if(dropDown.value === "high") {
      list.style.color = "red"

    }
    if(dropDown.value === "medium") {
      list.style.color = "orange"
    }
    if(dropDown.value === "low") {
      list.style.color = "blue"
    }

  })
})


 
 
  



 

