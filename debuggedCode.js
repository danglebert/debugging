const reallyAwesomeObject = {
  moreAwesomeProperty: [{
    soSoSoCool: 'Tis great!',
    veryGreat: 'Good time!'
  }],
}


//

const STOP = 'STOP';
const PROCEED = 'PROCEED';
const CAUTION = 'CAUTION';

const stopLight = {
  state: STOP,
}



function cycleStopLight (stopLight) {
  if (stopLight.state === STOP) {
    stopLight.state = PROCEED;
  }
  else if (stopLight.state === PROCEED) {
    stopLight.state = CAUTION;
  }
  else if (stopLight.state === CAUTION) {
    stopLight.state = STOP;
  }
}

cycleStopLight(stopLight);
console.log(stopLight);

cycleStopLight(stopLight);
console.log(stopLight);

cycleStopLight(stopLight);
console.log(stopLight);





var flipped = true;
const flipIt = () => {flipped = !flipped};
flipIt();




let ingredients = {
 bread: {
   kind: 'rye',
 },
 cheese: {
   kind: 'stilton',
 },
 lettuce: {
   kind: 'butter'
 }
}

function sliceCheese (cheese) {
 return '1 slice of ' + cheese.kind;
}

function makeASandwich () {
 let sandwich = []
 sandwich.push(ingredients.bread.kind + ' bread')
 sandwich.push(sliceCheese(ingredients.cheese));
 sandwich.push(sliceCheese(ingredients.cheese));
 sandwich.push(ingredients.lettuce.kind + ' lettuce');
 sandwich.push(ingredients.bread.kind + ' bread');
 return sandwich;
}

makeASandwich()




//Two solutions to this one - the one we sort of overkilled with changing the if statement and the one changing a few letters
function lookInTheBox (box) {
 box.innerBoxes.forEach(aBox => {
   if (aBox.innerBoxes) {
     lookInTheBox(aBox);
   } else {
       console.log(`Found this in the box: ${aBox.hey}`)
   }
 })
}

const theBox = {
 innerBoxes: [{
   innerBoxes: [{
     innerBoxes: []
   }],
 }, {
   innerBoxes: [{
     hey: "this is what's in the box!",
   }]
 }]
};

lookInTheBox(theBox)


// function lookInTheBox (box) {
//   if (box.innerBoxes) {
//     box.innerBoxes.forEach(aBox => lookInTheBox(aBox))
//   }
//   else {
//     console.log(`Found this in the box: ${box.hey}`)
//   }
// }

// const theBox = {
//   innerBoxes: [{
//     innerBoxes: [{
//       innerBoxes: []
//     }],
//   }, {
//     innerBoxes: [{
//       hey: "this is what's in the box!",
//     }]
//   }]
// };

// lookInTheBox(theBox)




const picard = {
  speak: function () {
    console.log(`There are ${this.many} lights!`)
  },
};

let obj = {
  many: 'four'
}

picard.speak.call(obj)



const yourNumber = prompt('Tell me your favorite number...');
console.log(`
*********************************************************************
  The incredible Ivanov will now add 100 to your favorite number...

  ${100 + yourNumber*1}
*********************************************************************
`);
console.log();
