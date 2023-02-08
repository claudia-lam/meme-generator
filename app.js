function displayMeme(e) {
  e.preventDefault(); //stop the form from submitting
  const newMemeContainer = createNewDiv();
  const memeImg = createImg();
  const memetext = createText(["top", "bottom"]);
  const deleteBtn = createDeleteButton();
  newMemeContainer.append(memeImg, deleteBtn, ...memetext);
  deleteMeme();
  deleteAllMemes();
  document.querySelector("form").reset();
}

function createNewDiv() {
  const memeDisplay = document.querySelector(".meme-display");
  const newDiv = document.createElement("div");
  newDiv.classList.add("meme-div");
  memeDisplay.append(newDiv);
  return newDiv;
}

function createImg() {
  const imgURL = document.getElementById("image-url").value;
  const newImg = document.createElement("img");
  newImg.src = `${imgURL}`;
  newImg.setAttribute("id", "meme-img");
  return newImg;
}

function createText(textPositions) {
  const textNodes = [];
  textPositions.forEach((text) => {
    const formText = document.getElementById(`${text}-text`).value;
    const newText = document.createElement("div");
    newText.classList.add(`${text}-text`);
    newText.innerText = `${formText}`;
    textNodes.push(newText);
  });
  return textNodes;
}

function createDeleteButton() {
  const newSpan = document.createElement("span");
  newSpan.innerHTML = "&times;";
  newSpan.classList.add("close");
  return newSpan;
}

function deleteMeme() {
  const deleteElement = document.querySelectorAll(".close");
  for (let i = 0; i < deleteElement.length; i++) {
    deleteElement[i].addEventListener("click", function () {
      deleteElement[i].parentElement.style.display = "none";
    });
  }
}

function deleteAllMemes() {
  const allMemesArr = document.querySelectorAll(".meme-div");
  const deleteAllBtn = document.querySelector("#delete-all");
  deleteAllBtn.addEventListener("click", function () {
    for (const meme of allMemesArr) {
      meme.style.display = "none";
    }
  });
}

const memeForm = document.querySelector("#meme-form");
memeForm.addEventListener("submit", displayMeme);
