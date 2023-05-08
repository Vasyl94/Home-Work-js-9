
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

//Get button start/stop element
const dataStartRef = document.querySelector('[data-start]');
const dataStopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
// values
let timerId = null;

// Add event listener start/stop on btn start/stop
dataStartRef.addEventListener('click', onStart);
dataStopRef.addEventListener('click', onStop);

// Function start event listener
function onStart() {
  timerId = setInterval(getBgColor, 1000);

  dataStartRef.toggleAttribute('disabled');
}

// Function stop event listener
function onStop() {
  clearInterval(timerId);

  dataStartRef.removeAttribute('disabled');
}

// Function set random bg color
function getBgColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}




// const start = document.querySelector("button[data-start]");
// console.log(start);

// const stop = document.querySelector("button[data-stop]");
// console.log(stop);

// let timeBac;

// // color
// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   }

// // слухачі 
// start.addEventListener("click",continueChanging)
// stop.addEventListener("click",stopInterval)



// // general

// // const timeBaC = setInterval(bakroundTime,1000)

// // change
// function bakroundTime () {
//    const colors = getRandomHexColor()
//  document.body.style.backgroundColor = colors
// }

// function continueChanging () {
//     if (!timeBac) {
//         timeBac = setInterval(bakroundTime,1000);
      
//     }
//     start.toggleAttribute("disabled"); 

// }

// function stopInterval () {
//     clearInterval(timeBac);
//     timeBac = null;
//     start = null
// }


