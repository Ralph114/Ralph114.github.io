const numberCards=16
let openCards= []

let p=document.querySelectorAll('.deck')
for (let index = 0; index < numberCards; index++) {
    let c=document.createElement('div')
    c.innerHTML=index % 2 + 1
    c.className="card"
    c.addEventListener('click',flipp)
    p.appendChild(c)
    
}



function flipp(event){
    if (!this.classList.contains('found')) {
        openCard(this)
    }
    //this.classList.toggle('flipped')
 
}
function openCard(o){
    alert("open")
}