let tasks = document.getElementsByClassName("task-div");
let section1 = document.getElementById("section1")
let section2 = document.getElementById("section2")
let section3 = document.getElementById("section3")
let section4 = document.getElementById("section4")


for (const task of tasks) {
  task.addEventListener("dragstart", (event) => {
    let selected = event.target
    
    section2.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    
    section2.addEventListener("drop", (event) => {
        section2.appendChild(selected)
        selected = null
    });

    section3.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    
    section3.addEventListener("drop", (event) => {
        section3.appendChild(selected)
        selected = null
    });

    section4.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    
    section4.addEventListener("drop", (event) => {
        section4.appendChild(selected)
        selected = null
    });

    section1.addEventListener("dragover", (event) => {
      event.preventDefault();
      section1.classList.add("draggable-cursor");
    });
    
    section1.addEventListener("drop", (event) => {
        section1.appendChild(selected)
        selected = null
        document.documentElement.classList.remove("draggable-cursor");
    });
  });
}

let icons = document.querySelectorAll(".icon")
icons.forEach((icon) => {
    icon.addEventListener('click', () => {
      var parent = this.parentElement;
      parent.remove();
    })
});