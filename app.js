const loadingBarItemEl = document.querySelector(".loading__bar__item");

let width = 1;
let loadingBar = setInterval(function(){
    if(width >= 100){
    clearInterval(loadingBar)
} else{
    width++;
    loadingBarItemEl.style.width = width + "%";
}},10)


//SET INTERVAL XAMPLE//
// let count = 0;
// let setIntervalIncrement = setInterval(function(){
//     if (count===10){
//         clearInterval(setIntervalIncrement)
//     } else{
//     count++;
//     console.log(count)
//     }
// }, 1000)

