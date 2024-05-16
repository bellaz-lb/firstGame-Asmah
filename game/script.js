'use strict'

const checkBtn = document.querySelector('.check');
const numberValue =document.querySelector('.number');
const message =document.querySelector('.message');
const scoreEl =document.querySelector('.score');
// const secretNumber=8
const secretNumber= Math.trunc(Math.random()*20)+1;
// math.trunc(math.random()*20)+1;


let score=20;
// numberValue.textContent=secretNumber;

checkBtn.addEventListener('click',function(){
    const input = document.querySelector('.guess');
    const inputValue=Number(input.value);
//  console.log(input.value, typeof inputValue)

    if(!inputValue){
        // console.log('No Number');
        message.textContent='⛔ No Number'
    }
    else if(inputValue===secretNumber){
        message.textContent='🎉Correct Number';
    document.body.style.backgroundColor='#60b347';
        numberValue.textContent=secretNumber;

    }
        
else if(inputValue !==secretNumber){
 if(score>1){
    if(input.value<secretNumber){
        score-=1
        scoreEl.textContent=score
        message.textContent='📈Too low'
    }
    else if(input.value>secretNumber){
        score-=1
        scoreEl.textContent=score
        message.textContent='📉Too High'
        }
}  
    else {
        message.textContent='You lost the game'
  }
}
});

againBtn.addEventListener('click', function(){
secretNumber = Math.trunc(Math.random()*20)+1;
})