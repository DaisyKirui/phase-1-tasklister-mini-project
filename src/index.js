document.addEventListener("DOMContentLoaded", () => {
  let inputBox = document.getElementById("create-task-form");
  inputBox.addEventListener("submit", function(e){
    e.preventDefault() 
    myList(e.target.label)
    inputBox.reset()
  })
});

function myList(myTask){
 
  let ul = document.querySelector("tasks")
  let li = document.createElement("li")
  let btn = document.createElement("button")
  btn.addEventListener("click", erase)
  btn.textContent = "delete" 
  li.textContent = `${myTask}`
  ul.appendChild(li)
  ul.appendChild(btn)

  console.log(li)
  
}

function erase (e){
  e.target.ul.remove

}




