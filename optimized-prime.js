
var primeList = []

let isPrime = (number)=>{

    if(number <= 1) return false;
    
    if(number <= 100){
        for(let i = 2; i <= number / 2; i++){
            if(number % i === 0) 
                return false;
        }
    }
    else{
        for(let i = 0; primeList[i] <= Math.sqrt(number); i++){
            if(number %  primeList[i] === 0) 
                return false;
        }
    }
    
    return true
}

let start = 0;
let end = 10000000;

let startTime = performance.now();


for(let i = start; i <= end; i++){
    if(isPrime(i)){
        primeList.push(i)
        //console.log(i)
    }
    
}

let endTime = performance.now();
let timeElapsed = endTime - startTime;

console.log("Time: ", timeElapsed)
console.log(primeList.length)
