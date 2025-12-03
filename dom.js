let newhead=document.createElement("h1")

newhead.innerHTML="<i>example of dom manipulation</i>";

document.querySelector("body").prepend(newhead)

let para =document.querySelector("p")
para.remove(para)

let btn=document.createElement("button")
btn.innerText="click here"
btn.style.margin="20px"
btn.style.background="yellow"
btn.style.border="none"

let div=document.querySelector("div")
div.after(btn)
