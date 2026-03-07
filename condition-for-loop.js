console.log("*********** iterate or loop through an array with: for loop **********")

const cars = ["Tesla", "Lexus", "Volvo", "Toyota", "Mini", "BMW", "VW"];
const target = "Toyota";
//iterates through array and breaks when targetted element is found

for (const car of cars) {
    if (car === target) {
      console.log(`Found the target: ${car}`);
      break;
    }
    console.log(`Current item: ${car}`);
  }



console.log("*********** for loop **********")
//use for loop when you know number of iterations
for(let k=0;k<=3;k++)
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
        break;
    }

}