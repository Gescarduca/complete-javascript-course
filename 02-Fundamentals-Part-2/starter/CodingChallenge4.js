/* const bills = [22,295,176,440,37,105,10,1100,86,52];

const tips = [];
const totals = [];


function calcTip(billValue){
    return (billValue>=50 && billValue<=300) ? billValue*0.15 : billValue*0.20;
}

for(let i = 0; i< bills.length;i++){
    tipValue = calcTip(bills[i]);
    tips.push(tipValue);
    totals.push(tipValue+bills[i]);
}

console.log('bills',bills);
console.log('tips',tips);
console.log('totals',totals);

function calcAverage(arr){
    let sum = 0;
    for(let i = 0; i< arr.length -1;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}

console.log(`avg of totals: ${calcAverage(totals)}`); */
