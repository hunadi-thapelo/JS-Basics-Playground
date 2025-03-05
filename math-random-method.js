
//generate random email with same domain name
function getRandomEmail(domain){
    
    return randomText = Math.random().toString(36).substring(7) + '@' + domain
}

//print to console
//console.log(getRandomEmail('google.com'));
getRandomEmail('google.com');
