// Hex color code conatains digits from from 0-9 and A-F
// example : #e7e7e7
// That's why making a list of 0-9 and A-F

const hexCode = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
let colorCode = "#";
btn.addEventListener("click", ()=>{
    for(let i=0; i<6; i++){
        colorCode += hexCode[Math.floor(Math.random() * hexCode.length)];
    }
    content.textContent = colorCode;
    document.body.style.backgroundColor = colorCode;
    colorCode = "#"
})