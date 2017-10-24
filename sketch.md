# Sketch for release
> Taken from JSfiddle, links are missing

## Index.html
```html
<span class="buttonWrapper"><button id="p1">Player 1</button></span>
<span class="buttonWrapper"><button id="p2">Player 2</button></span>
<div>
   <h2 class="dev" id="display">Display</h2>
   <p class="dev" id="init"></p>
</div>
```

## Master.css
```css
.buttonWrapper {}

.dev {
  display: none;
}

button {
   width: 100px;
   height: 100px;
   color: white;
}

button#p1 {
   background-color: tomato;
}

button#p2 {
   background-color: rebeccapurple;
}
```

## Client.js
```js
let time = Date.now();
let clickedTime;
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var display = document.getElementById('display');
var winner = false;
let init = document.getElementById('init');
let button1, button2;
let button1Time, button2Time;
let suffix = 'ms';

let toggleVar = 0;

init.textContent = time + ' -> Current unix time';

// Main program
let main = async() => {

  function testFunc() {
    if (button1 && button2) {
      // alert('Worked');
      displayResults(button1Time, button2Time);
      button1 = button2 = false;
      return;
    } else {
      console.log("Didn't");
    }
  }
  
  // Display results after both buttons has been pressed
  let displayResults = (b1R, b2R) => {
    // alert('Hello from the calc function!');
    p1.textContent = b1R.toString() + suffix;
    p2.textContent = b2R.toString() + suffix;
  }

// Function to run when button 1 is pressed
let p1F = function() {
      display.textContent = 'P1 Clicked';
      clickedTime = Date.now();
      init.textContent = clickedTime - time;
      // Dev
      button1 = true;
      button1Time = (Date.now() - time);
    
    testFunc();
   }
  
// Function to run when button 2 is pressed
let p2F = function() {
      display.textContent = 'P2 Clicked';
      clickedTime = Date.now();
      // Dev
      button2 = true;
      button2Time = (Date.now() - time);
    
    testFunc();
    
}

   p1.addEventListener('click', p1F );

   p2.addEventListener('click', p2F );
    
} // End main

window.onload = main();
```
