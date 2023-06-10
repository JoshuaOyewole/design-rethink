//DYNAMIC COPYRIGHT YEAR
document.getElementById("year").innerText = new Date().getFullYear();

const hover = (el) => {
    el.classList.toggle("slider-img")
  //Get the current image src and convert to the large format
  //let large_img_source = el.firstElementChild.src.replace(/.png/, "-large.png");
  //el.firstElementChild.src = large_img_source;
  //Check if the element is currently hovered
   //if (el.classList.toggle("slider-img")) {
    //If TRUE, change the image to a large one
    //el.firstElementChild.src = large_img_source;
  ///} 
};

const unhover = (el) => {

    console.log("I am out oooooo")
  //Get the current image src and convert to the large format
  // let small_img_source = el.firstElementChild.src.replace(/-large.png/, ".png"); 
  // el.firstElementChild.src = small_img_source;
  //Check if the element is currently hovered
 /*  if (!el.classList.contains("slider-main-image")) {
    //If TRUE, change the image to a large one
    el.firstElementChild.src = small_img_source;
  } */
};

