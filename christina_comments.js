// Episode 1

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);
//
**--MY COMMENT--** The murderer is Miss Scarlet because scenario is available to the declareMurderer variable which returns informations from scenario.


// Episode 2
// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

**--MY COMMENT--** The murderer is Professor Plum because he is a const variable and cannot be altered by the changeMurderer variable. The chnageMurderer variable causes an error when the code is run.


// Episode 3
// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

**--MY COMMENT--**  The first verdict: The murderer is Mrs Peacock because the murderer variable is let and can be modified. The declareMurderer variable is a function which modifies the murder but only does so within it's function therefore the second verdict is The murderer is Professor Plum.


// Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

**--MY COMMENT--**  The console will print The suspects are Miss Scarlet, Professor Plum, Colonel Mustard. Then the console will print Suspect three is Mrs Peacock because uspectThree is only changed within the scope of declareAllSuspects.


// Episode 5

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

**--MY COMMENT--**  I had thought this would create an error due to trying tot change the weapon. But it turns out you can change the weapon so the result was The weapon is the revolver.


// Episode 6

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

**--MY COMMENT--**  The murderer is Mrs White because the murderer variable is declared with let meaining it can be changed. the changeMurderer variable changes murdere using a function.


// Episode 7

let murderer = 'Professor Plum'; //the murderer has been declared using let which means it can be changed.

const changeMurderer = function() {
  murderer = 'Mr. Green'; //this is where the Murderer is declared as a const.

  const plotTwist = function() {
    let murderer = 'Colonel Mustard'; //this only changes the murderer within this function.

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet'; //this cannot change the murderer because murderer has been declared above as Mr Green using a const.
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);


// Episode 8
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

**--MY COMMENT--**  The weapon is the candle stick because changeScenario changes the murderer to Colonel Mustard which changes the weapon to Candle Stick.


// Episode 9

// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

**--MY COMMENT--**  The murderer is Professor Plum because it is only Mrs Peacock within the function.
