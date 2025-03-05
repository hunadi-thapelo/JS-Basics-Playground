
//generate random email with same domain name
function getRandomEmail(domain){
    
    return randomText = Math.random().toString(36).substring(7) + '@' + domain
}

//generate random number and returns only whole number
function randomNumber(number){

    return Math.floor((Math.random(number) * 100));
}

//print to console
//console.log(getRandomEmail('google.com'));
getRandomEmail('google.com');
console.log(randomNumber(20));

