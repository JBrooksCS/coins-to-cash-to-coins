billfold = {
    quarters: 0,
    nickels: 0,
    dimes: 0,
    pennies: 0
}



const piggyBank = Object.create(billfold)
//console.log(piggyBank)

//Function Definition
function changeADD(billfold_OBJ) {
    let cents = billfold_OBJ.quarters * .25
    cents += billfold_OBJ.dimes * .1
    cents += billfold_OBJ.nickels * .05
    cents += billfold_OBJ.pennies * .01
    return (cents)
}


//create second piggybank
const piggyBank_2 = Object.create(billfold)

function makeCHANGE(dollars) {
    let quarters_change = 0;
    let dimes_change = 0;
    let nickels_change = 0;
    let pennies_change = 0;
    if (dollars !== 0) {
        for (i = 0; dollars >= .25;) {
            dollars = (dollars - .25).toFixed(2);
            quarters_change++;
        }
        for (i = 0; dollars >= .1;) {
            dollars = (dollars - .1).toFixed(2);
            dimes_change++;
        }
        for (i = 0; dollars >= .05;) {
            dollars = (dollars - .05).toFixed(2);
            nickels_change++;
        }
        for (i = 0; dollars >= .01;) {
            dollars = (dollars - .01).toFixed(2);
            pennies_change++;
        }
    }
    else {
        console.log("Get a job!")
    }
    piggyBank_2.quarters = quarters_change
    piggyBank_2.dimes = dimes_change
    piggyBank_2.nickels = nickels_change
    piggyBank_2.pennies = pennies_change
}

//Calling functions
let dollarAmount = 0;
piggyBank.quarters = prompt("How many quarters do you have?");
piggyBank.dimes = prompt("How many dimes do you have?");
piggyBank.nickels = prompt("How many nickels do you have?");
piggyBank.pennies = prompt("How many pennies do you have?");
dollarAmount = changeADD(piggyBank)
makeCHANGE(dollarAmount)
console.log(dollarAmount.toFixed(2))
console.log(piggyBank_2)




