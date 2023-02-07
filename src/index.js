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

fetch('http://localhost:3000/toys')
  .then((resp) => resp.json())
  .then((toyObjects) => {
    toyObjects.forEach((toy) => {
      const toyInfo = document.querySelector('#toy-collection');
      toyCard = document.createElement("div");
      toyCard.className = "card"
      toyInfo.append(toyCard)

      const toyName = document.createElement("h2");
      toyName.innerText = toy.name
      const toyImage = document.createElement("img");
      //img src and url
      toyImage.className = "toy-avatar";
      const toyLikes = document.createElement("p");
      toyLikes.innerText = toy.likes + " " + "likes"
      const button = document.createElement("button");
      button.className = "like-btn";
      
      

      toyCard.append(toyName, toyImage, toyLikes, button);
    })
  })



