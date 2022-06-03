/* 'use strict';

const calcAverage = (game1, game2, game3) => (game1 + game2 + game3)/3;

function checkWinner(avgDolphins, avgKoalas){
    console.log(avgDolphins, avgKoalas)
    if(avgDolphins>=2*avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    }
    else if(avgKoalas>= 2*avgDolphins){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    }
    else{
        console.log(`Nobody wins`)
    }
}


//data1
checkWinner(calcAverage(44,23,71), calcAverage(65,54,49));


//data2
checkWinner(calcAverage(85,54,41), calcAverage(23,34,27)); */