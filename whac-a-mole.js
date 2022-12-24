

const squares = document.querySelectorAll('.square');
const mole= document.querySelector('.mole');
const score= document.querySelector('.score');
const timeLeft= document.querySelector('#time');
const moleSmashed=document.querySelector('.moleSmashed');
const cursor=document.querySelector('.cursor');

let result=0;
let hitMole;
let SmashedMole;
let currentTime=60;
let moveTime = null;

function randomSquare(){
    
   squares.forEach(square=>{
    square.classList.remove('mole');
    square.classList.remove('moleSmashed');
  })

  let randomsquare= squares[Math.floor(Math.random()*9)];
  randomsquare.classList.add('mole');
  
  hitMole=randomsquare.innerText;
  // console.log(hitMole);
  SmashedMole=randomsquare;

}



function moveMole(){
    
    moveTime=setInterval(randomSquare, 750);
    
}

moveMole();

squares.forEach(square=>{
  square.addEventListener("click", () =>
  {
    
    

    if(square.id===hitMole)
    {
      result++;      
      score.innerText=result;
      SmashedMole.classList.add('moleSmashed');
      hitMole=null;    
    }
  })
})

function restart(){
  clearInterval(countdown);
    clearInterval(moveTime);
  result=0;
  score.innerText=result;
  currentTime=60;
  moveMole();
}

function countdown(){

  if(currentTime>0)
  {
    currentTime--;
    timeLeft.innerText=currentTime;

  }
  else{
    if(currentTime<0){
      currentTime=60;
    }
    clearInterval(countdown);
    clearInterval(moveTime);
    // document.addEventListener(alert('!!!GAME OVER!!!.....Total Score ='+' '+score.innerText));
  }

  
  
}
setInterval(countdown,1000);

window.addEventListener('mousemove',e=>{
  cursor.style.top = e.pageY +'px' ;
  cursor.style.left=e.pageX+'px';
})

window.addEventListener('mousedown',()=>{
  cursor.classList.add('active');
})











