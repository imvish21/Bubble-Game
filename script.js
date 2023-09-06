/*code by vishal */ 
var rn=0;
var hiting;
//for random bubbles
function makeBubble()
{
    var clutter="";
    for(let i=0;i<=101;i++)
    {
        let a=Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${a}</div>`
    }
document.querySelector("#pbtm").innerHTML=clutter;
}
//for Hit
function hitBubble(){
     hiting  = setInterval(()=>{
        rn=Math.floor(Math.random()*10);
        document.querySelector("#hit").textContent=rn;
    },2500)
    
}

//for timer
var timer = 60;
function setTimer()
{
    setTimeout(()=>{
       var timing =  setInterval(()=>{
            if(timer>0){
            timer--;       
     document.querySelector("#timer").textContent=timer;
        }
        else{
            clearInterval(timing);
            clearInterval(hiting);
    document.querySelector("#pbtm").innerHTML=`<h1>Game Over<br>Score:${score}</h1>`;
        }
        },1000)
    },2000)
    

}


//for score
var score = 0;
function getscore(){
    score += 10;
    document.querySelector("#score").textContent=score;
}



//EventBubbling
//sare bubbles pe ek ek karke lagane ki jagah sbke common parent pe listener lga do.
document.querySelector("#pbtm")
.addEventListener('click',(detailsofselectedbubble)=>{
    // alert("clicked")
    // console.log(detailsofselectedbubble.target);
    console.log(Number(detailsofselectedbubble.target.textContent));
    var clickednum = Number(detailsofselectedbubble.target.textContent);
    if(clickednum === rn)
    {
        getscore();
        makeBubble();
    }

})


makeBubble();
hitBubble();
setTimer();
// getscore();


/*code by vishal */