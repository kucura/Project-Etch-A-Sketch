const gridNumber24 = document.querySelector("#grid24")
gridNumber24.addEventListener('click', grid24);


const gridNumber16 = document.querySelector("#grid16")
gridNumber16.addEventListener('click', grid16);

const gridNumber8 = document.querySelector("#grid8")
gridNumber8.addEventListener('click', grid8);


function grid16 () {
    container.innerHTML = '';
    let gridNum = 256
    for (i=1; i<=gridNum; i++) {
        document.getElementById('container').insertAdjacentHTML('beforeend','<div class="one-tile" style="flex: 0 1 6%;"></div>'); // Make divs
        
}


const oneTile = document.querySelectorAll(".one-tile"); // this make Node!!!
for (const oneTiles of oneTile) {
  oneTiles.addEventListener('mouseover', myFunc);
}

function myFunc() {
    
    let randomColor =Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = "#"+randomColor;
    }
}
 
function grid8 () {
    container.innerHTML = '';
    let gridNum = 64
    for (i=1; i<=gridNum; i++) {
        document.getElementById('container').insertAdjacentHTML('beforeend','<div class="one-tile" style="flex: 0 1 12%; height:60px;"></div>'); // Make divs
        
}
const oneTile = document.querySelectorAll(".one-tile"); // this make Node!!!
for (const oneTiles of oneTile) {
  oneTiles.addEventListener('mouseover', myFunc);
}

function myFunc() {
    
    let randomColor =Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = "#"+randomColor;
    
}





}

function grid24 () {
  container.innerHTML = '';
  let gridNum = 576
  for (i=1; i<=gridNum; i++) {
      document.getElementById('container').insertAdjacentHTML('beforeend','<div class="one-tile" style="flex: 1 5 3.8%; height:5px;"></div>'); // Make divs
      
}
const oneTile = document.querySelectorAll(".one-tile"); // this make Node!!!
for (const oneTiles of oneTile) {
oneTiles.addEventListener('mouseover', myFunc);
}

function myFunc() {
  
  let randomColor =Math.floor(Math.random()*16777215).toString(16);
  this.style.backgroundColor = "#"+randomColor;
  
}





}







 




