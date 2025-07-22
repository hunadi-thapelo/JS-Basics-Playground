const flag = true
let hasValidDriversLicense = false
let hasValidRaceTicket = true

const cars = ["Tesla", "Lexus", "Volvo", "Toyota", "Mini", "BMW", "VW"];
const target = "Toyota";

if(!flag)//expression is reversed (with negation), however variable remains unchanged
{
    console.log("Condition is satisfied")
}
else
{
    console.log("condition is not satisfied")
}


if( hasValidDriversLicense && hasValidRaceTicket){
    console.log('Qualifies to test drive the new BMW sport cars')
} else if(hasValidDriversLicense || hasValidRaceTicket){
    console.log('Qualifies to view the new BMW sport cars')
} else {
    console.log('Does not qualify to enter the BWM sport car race track floor')

}

//iterates through array and breaks when targetted element is found

for (const car of cars) {
    if (car === target) {
      console.log(`Found the target: ${car}`);
      break;
    }
    console.log(`Current item: ${car}`);
  }

/*
//while loop
let i = 0

while(i<10)
{
    i++
    console.log(i)
}

//do...while loop
//Example: do...while loop can be used when requirement is to check for a status, check status of empty field validation when trying to log in
console.log("*********** do while loop **********")
let j=0
do{
    j++
} while(j>10);
console.log(j)


console.log("*********** for loop **********")
//use for loop when you know number of iterations
for(let k=0;k<=10;k++)
{
    console.log(k)
}
console.log("*********** for loop exercise **********")
//reqirement: from 1 to 10, provide common multiple values of 2 and 5
for(let k=1;k<=10;k++)
{
    if(k%2==0 || k%5==0)
    {
        console.log(k)
    }
}

console.log("*********** nested if statement with for loop exercise **********")
//reqirement: print to console the first 3 numbers from 1 to 10, provide common multiple values of 2 and 5
let x = 0
for(let k=1;k<=100;k++)
{
    if(k%2==0 && k%5==0)
    {
        x++
        console.log(k)

        if(x == 3)
        break
    }

}
*/