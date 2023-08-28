var clutter="";
for(let i=0;i<=101;i++)
{
    let a=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${a}</div>`
}
document.querySelector("#pbtm").innerHTML=clutter;