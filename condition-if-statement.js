const flag = true
let hasValidDriversLicense = false
let hasValidRaceTicket = false

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
