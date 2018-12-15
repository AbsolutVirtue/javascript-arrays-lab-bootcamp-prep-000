// <<<<<<< HEAD
// var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// // Add your functions and code here
// function destructivelyAppendKitten(array, name){
//   kittens.push("Ralph")
//   return kittens
// }

// function destructivelyPrependKitten(array, name){
//   kittens.unshift("Bob")
// }

// function destructivelyRemoveLastKitten(array){
//   kittens.pop()
//   return kittens
// }

// function destructivelyRemoveFirstKitten(array){
//   kittens.shift()
//   return kittens
// }

// function appendKitten(array, kitten){
//   return [...kittens, "Broom"]
// }

// function prependKitten(array, kitten){
//   return ["Arnold",...kittens]
// }

// function removeLastKitten(array){
//   return kittens.slice(0, kittens.length - 1)
// }

// function removeFirstKitten(array){
//   return kittens.slice(1)
// }
// =======
// var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// // Add your functions and code here
// function destr
// >>>>>>> da9c9cbb34af0e80e2d6e1c5c494b135e5d75c12

var kittens = ['Milo' , 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name) {
  var newKit = []
  newKit = [...kittens, name]
  return newKit;
}

function prependKitten(name) {
  var newKit = [];
  newKit = [name, ...kittens];
  return newKit
}

function removeLastKitten() {
  var newKit = [];
  newKit = kittens.slice(0, kittens.length - 1);
  return newKit;
  
}
function removeFirstKitten() {
  var newKit = []
  newKit = kittens.slice(1);
  return newKit;
}































