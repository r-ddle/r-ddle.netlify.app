const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("span").onmouseenter = event =>{  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 5;
  }, 30);
}

// Add an event listener to the GitHub and Home logos
document.querySelector(".iframe").classList.remove("blur")

document.querySelector(".github").addEventListener("mouseenter", () => {
  document.querySelector(".iframe").classList.add("blur");
});

document.querySelector(".github").addEventListener("mouseleave", () => {
  document.querySelector(".iframe").classList.remove("blur");
});

document.querySelector(".home").addEventListener("mouseenter", () => {
  document.querySelector(".iframe").classList.add("blur");
});

document.querySelector(".home").addEventListener("mouseleave", () => {
  document.querySelector(".iframe").classList.remove("blur");
});
