const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.88;
const johnWeight = 95;
johnBMI = johnWeight / johnHeight ** 2;
markBMI = markWeight / (markHeight * markHeight);

/*
let markHigherBMI = markBMI > johnBMI;
console.log("Mark height: " + markHeight + ", Weight: " + markWeight);
console.log("John Height: " + johnHeight + ", Weight: " + johnWeight);
console.log("Does Mark have higher BMI than John: " + markHigherBMI);
*/

if(markBMI> johnBMI){
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`)
}else{
    console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${johnBMI}`)
}

