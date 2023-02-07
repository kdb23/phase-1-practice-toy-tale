let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

const toyInfo = document.querySelector('#toy-collection');
toyCard = document.createElement("div");
toyCard.className = "card"
toyInfo.append(toyCard)


const toyName = document.createElement("h2");
const toyImage = document.createElement("img");
toyImage.className = "toy-avatar";
// toyImage.src = "image-attribute"; // go back to this one
const toyLikes = document.createElement("p");
const button = document.createElement("button");
button.className = "like-btn";
  // button.id = 

toyCard.append(toyName, toyImage, toyLikes, button);

