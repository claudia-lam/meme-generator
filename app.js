const memes = [];
//declare a generateMeme function
function displayMeme(e) {
  //stop the form from submitting
  e.preventDefault();
  createImg();
  // createObj();
  createText("top");
  createText("bottom");
  document.querySelector("form").reset();
}

const memeDisplay = document.querySelector(".meme-container");

function createImg() {
  const imgURL = document.getElementById("image-url").value;
  const newImg = document.createElement("img");
  newImg.src = `${imgURL}`;
  memeDisplay.append(newImg);
}

function createText(textPosition) {
  const memeText = document.getElementById(`${textPosition}-text`).value;
  const newText = document.createElement("div");
  newText.classList.add(`${textPosition}-text`);
  newText.innerText = `${memeText}`;
  memeDisplay.append(newText);
}

// //declare a meme object
// function createObj() {
//   const memeValuesObj = {};
//   //create key - imgUrl and assign from value
//   memeValuesObj.imgURL = document.getElementById("image-url").value;
//   memeValuesObj.topText = document.getElementById("top-text").value;
//   memeValuesObj.bottomText = document.getElementById("bottom-text").value;
//   //create key - topText and assign form value
//   //create key - bottomText and assign form value
//   memes.push(memeValuesObj);
// }

//add an event listener when the submit button is clicked
//select submit button
const addMemeBtn = document.querySelector(".add-meme-btn");
//create an event listener on the submit button
addMemeBtn.addEventListener("click", displayMeme);
