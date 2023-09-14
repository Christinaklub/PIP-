// Hent variablerne
const openBtn = document.getElementById("openBtn");
const closeBtn = document.querySelector(".close");
const textarea = document.querySelector(".pip-text");
const charCount = document.getElementById("charCount");

openBtn.addEventListener("click", () => {
    pipModal.style.display = "block";
});


// Add an event listener to the close button
closeBtn.addEventListener("click", () => {
    pipModal.style.display = "none";
});

// start med at sætte character count til det du ville have den skal tælle op til. det er indholdet af charCount. I mit tilfælde er det 255. 
charCount.textContent = "255";

// tilføj en event listener for character count nedtælling.
textarea.addEventListener("input", () => {
    const characterCount = textarea.value.length;
    
    const remainingCharacters = 255 - characterCount;
    
    charCount.textContent = remainingCharacters;
});

// Form/ modal 

const form = document.getElementById("pipModal")

form.addEventListener("postBtn", async (event) =>  {
  console.log ("hello from pip form");
  event.preventDefault();
  const data =  new FormData(form);

  const username = data.get("usernma");
  console.log ("username");

  const text = data.get("pip-text");
  console.log ("text");

});

async function load(){
    const body = await form ();
  
    body.forEach((x) => {
      form (x);
  });
  }
  
  load();