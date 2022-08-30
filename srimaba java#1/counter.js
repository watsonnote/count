//document.getElementById("count-el").innerText = 5

/**let count = 4;
console.log(count);
let myAge=16 
console.log(myAge)**/
let saveEl= document.getElementById("save-el")
let countEl= document.getElementById("count-el")

let count = 0 
function increment(){
    
    count +=  1
    countEl.innerText= count
}
function save(){
    let counter = count + " - "
    saveEl.textContent += counter
    countEl.textContent = 0
    count = 0
    console.log(count)
    
}
