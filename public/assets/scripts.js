// SideMenu
const sideMenuButtons = document.querySelectorAll('.sidemenu-button');
const sideMenu = document.querySelector('.sideMenu');
//
const arrowLeft= document.querySelector('.arrow-left');
const arrowRight= document.querySelector('.arrow-right');

arrowLeft.addEventListener('click',slideLeft);
arrowRight.addEventListener('click',slideRight);


// --------------===Funcionlidad menu===--------------

for(const button of sideMenuButtons) {
  button.addEventListener('click', toggleSideMenu);
}
document.addEventListener('click', closeSideMenu);

function closeSideMenu(event) {
  console.log(event.target);
  if(event.target !== sideMenu && !sideMenu.contains(event.target)) {
    if(!event.target.classList.contains('sidemenu-button')){
      sideMenu.classList.remove('active');
    }
  }
}
function toggleSideMenu() {
  sideMenu.classList.toggle('active');
}
// --------------===Funcionlidad Carrousel===--------------
const carrouselItems = document.querySelectorAll('.carrouselItem');
const imageWidth=document.querySelector('.imageContainer');
const imageSize = imageWidth.offsetWidth
console.log(imageSize);

const totalWidth = (carrouselItems.length -1)* imageSize;//corregir dinamico
let carrouselCounter = 0;

automaticCarrousel();

function automaticCarrousel(){
    setTimeout(()=>{
    slideRight(totalWidth);
    // slideLeft();
    automaticCarrousel();

  },3000);
}
function slideRight() {
  if(carrouselCounter == -totalWidth) {
    carrouselCounter = 0;
  } else {
    carrouselCounter -= imageSize;
    console.log(imageSize);
  }
  carrouselMove(carrouselCounter);
}

function slideLeft() {
  if(carrouselCounter == 0) {
    carrouselCounter = -totalWidth;
  } else {
    carrouselCounter += imageSize;
  }
  carrouselMove(carrouselCounter);
}

function carrouselMove(carrouselCounter){
  for(item of carrouselItems)
  {
    item.style.transform = "translateX("+ carrouselCounter + "px)"

  }
}
