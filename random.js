let delayInSeconds = 3;
let countdown = delayInSeconds ;

const intervalId = setInterval(()=>{
    countdown-- ;
    console.log(`Random Number Generating in ${countdown} seconds...`);
    if(countdown===0){
        clearInterval(intervalId);
        const randomNumber =Math.floor(Math.random()*100);
        console.log(`Random Number Generated : ${randomNumber}`);
    }
},1000);