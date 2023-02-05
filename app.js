function displayMeme(e) {
  //stop the form from submitting
  e.preventDefault();
  createImg();
  document.querySelector("form").reset();
}

const memeDisplay = document.querySelector(".meme-display");

function createImg() {
  //add a new div to memeDisplay
  const newDiv = document.createElement("div");
  newDiv.classList.add("meme-div");
  memeDisplay.append(newDiv);
  //add a new image to new div
  const imgURL = document.getElementById("image-url").value;
  const newImg = document.createElement("img");
  newImg.src = `${imgURL}`;
  newDiv.append(newImg);
  //add text to image
  createText("top", newDiv);
  createText("bottom", newDiv);
  createDeleteButton(newDiv);
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

const addMemeBtn = document.querySelector(".add-meme-btn");
addMemeBtn.addEventListener("click", displayMeme);
