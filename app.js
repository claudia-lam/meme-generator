function displayMeme(e) {
  //stop the form from submitting
  e.preventDefault();
  createNewDiv();
  document.querySelector("form").reset();
}

const memeDisplay = document.querySelector(".meme-display");

function createNewDiv() {
  //add a new div to memeDisplay
  const newDiv = document.createElement("div");
  newDiv.classList.add("meme-div");
  memeDisplay.append(newDiv);
  createImg(newDiv);
}

function createImg(parentNode) {
  //add a new image to new div
  const imgURL = document.getElementById("image-url").value;
  const newImg = document.createElement("img");
  newImg.src = `${imgURL}`;
  newImg.setAttribute("id", "meme-img");
  parentNode.append(newImg);
  //add text to image
  createText("top", parentNode);
  createText("bottom", parentNode);
  createDeleteButton(parentNode);
  //delete all memes
  const allNewDivs = document.querySelectorAll(".meme-div");
  deleteAllMemes(allNewDivs);
}

function createText(textPosition, parentNode) {
  const memeText = document.getElementById(`${textPosition}-text`).value;
  const newText = document.createElement("div");
  newText.classList.add(`${textPosition}-text`);
  newText.innerText = `${memeText}`;
  parentNode.append(newText);
}

function createDeleteButton(parentNode) {
  const newSpan = document.createElement("span");
  newSpan.innerHTML = "&times;";
  newSpan.classList.add("close");
  parentNode.append(newSpan);
  const deleteBtn = document.querySelectorAll(".close");
  deleteMeme(deleteBtn);
}

function deleteMeme(deleteElement) {
  for (let i = 0; i < deleteElement.length; i++) {
    deleteElement[i].addEventListener("click", function () {
      deleteElement[i].parentElement.style.display = "none";
    });
  }
}

function deleteAllMemes(allMemes) {
  const deleteAllBtn = document.querySelector("#delete-all");
  const allMemesArr = Array.from(allMemes);
  deleteAllBtn.addEventListener("click", function () {
    for (const meme of allMemesArr) {
      meme.style.display = "none";
    }
  });
}

const memeForm = document.querySelector("#meme-form");
memeForm.addEventListener("submit", displayMeme);
