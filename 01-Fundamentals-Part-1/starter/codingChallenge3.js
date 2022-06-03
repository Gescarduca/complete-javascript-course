

//calculate average

let avgDolphins = (96 + 108 + 89)/3;
let avgKoalas = (88 + 91 + 110)/3;

if(avgKoalas>avgDolphins){
    console.log(`Koalas are winner with score: ${avgKoalas}`);
}else if(avgKoalas<avgDolphins){
    console.log(`Dolphins are winner with score: ${avgDolphins}`);
}else{
    console.log(`Its a Draw dolphins had ${avgDolphins} and koalas had ${avgKoalas}`);

}

//Bonus1
avgDolphins = (97 + 112 + 101)/3;
avgKoalas = (109 + 95 + 123)/3;
if(avgKoalas>avgDolphins && avgKoalas >= 100){
    console.log(`Koalas are winner with score: ${avgKoalas}`);
}else if(avgKoalas<avgDolphins && avgDolphins >= 100){
    console.log(`Dolphins are winner with score: ${avgDolphins}`);
}else{
    console.log(`Its a Draw dolphins had ${avgDolphins} and koalas had ${avgKoalas}`);

}

//Bonus2
avgDolphins = (97 + 112 + 101)/3;
avgKoalas = (109 + 95 + 106)/3;

if(avgKoalas>avgDolphins && avgKoalas >= 100){
    console.log(`Koalas are winner with score: ${avgKoalas}`);
}else if(avgKoalas<avgDolphins && avgDolphins >= 100){
    console.log(`Dolphins are winner with score: ${avgDolphins}`);
}else if(avgKoalas>=100 && avgDolphins>=100){
    console.log(`Its a Draw dolphins had ${avgDolphins} and koalas had ${avgKoalas}`);
}else{
    console.log(`Nobody wins the cup`);
}