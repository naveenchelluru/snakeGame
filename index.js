let Markup=document.querySelector('.play-board')
let foodX,foodY,headX=10,headY=10,velocityX=0,velocityY=0,htmlMarkup;
let snakeBody=[];
let gameOver=false;
let setIntervalId;
const changeFood=()=>{
        foodX=Math.floor(Math.random()*30)+1;
        foodY=Math.floor(Math.random()*30)+1;
}
const handleGameOver=()=>{
    clearInterval(setIntervalId);
    alert('Game Over press ok to continue');
    location.reload();
}


const changeHead=(e)=>{
    console.log(e.key);
    if(e.key=='ArrowRight'){
        velocityX=0;
        velocityY=1;
    }
    else if(e.key=='ArrowLeft'){
        velocityX=0;
        velocityY=-1;
    }
    else if(e.key=='ArrowUp'){
        velocityX=-1;
        velocityY=0;
    }
    else if(e.key=='ArrowDown'){
        velocityX=1;
        velocityY=0;
    }
}

const foodChain=()=>
{
    if(headX==foodY && headY==foodY){
        console.log("hello");
        changeFood();
        snakeBody.push([foodX,foodY]);
    }
}

const initGame=()=>{

    if(gameOver) return handleGameOver() ;


    if(headX<0 || headX>30 || headY<0 || headY>30){
        gameOver=true;
    }

    htmlMarkup=`<div class="food" style="grid-column:${foodX};grid-row:${foodY}"></div>`;

    
    foodChain();


    headX=headX+velocityX;
    headY=headY+velocityY;
   

    
    for (let i =  snakeBody.length-1;i>0; i--) {
        snakeBody[i]=snakeBody[i-1];        
    }
    snakeBody[0]=[headX,headY];

    
    for (let i =  0; i <snakeBody.length; i++) {
    htmlMarkup+=`<div class="snake" style="grid-column:${snakeBody[i][1]};grid-row:${snakeBody[i][0]}"></div>`;
        
    }
   

    Markup.innerHTML=htmlMarkup;
}
changeFood();
setIntervalId=setInterval(initGame,125);

document.addEventListener('keydown',changeHead);

