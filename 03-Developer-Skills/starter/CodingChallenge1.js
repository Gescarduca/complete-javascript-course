const temps = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

function printForecat(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}C in ${arr.indexOf(arr[i]) + 1} days`);
  }
}

//printForecat(temps);
printForecat(temps2);
