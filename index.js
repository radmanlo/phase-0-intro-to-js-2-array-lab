// Write your solution here!

// initializing the cats array
const cats = ["Milo", "Otis", "Garfield"]

// before eachfunction this function will be run
beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

//function will be destruct the cats array and a cat will be append
function destructivelyAppendCat(name){
    cats.push(name)
}
destructivelyAppendCat('persian')

//function will be destruct the cats array and a cat will be prepend
function destructivelyPrependCat(name){
    cats.unshift(name)
}
destructivelyPrependCat("famous")

//function will be destruct the cats array and a cat will be deleted from the end
function destructivelyRemoveLastCat(){
    cats.pop()
}
destructivelyRemoveLastCat()

//function will be destruct the cats array and a cat will be deleted from the beginning
function destructivelyRemoveFirstCat(){
    cats.shift()
}
destructivelyRemoveFirstCat()

//function will be make a copy of the cats array and append a cat to new array
function appendCat(name){
    const newCats = [...cats]
    newCats.push(name)
    return newCats
}
appendCat("new")

//function will be make a copy of the cats array and prepend a cat to new array
function prependCat(name){
    const newCats = [...cats]
    newCats.unshift(name)
    return newCats
}
prependCat("new")  

//function will be make a copy of the cats array and pop a cat to new array
function removeLastCat(){
    const newCats = cats.slice()
    newCats.pop()
    return newCats
}
removeLastCat()

//function will be make a copy of the cats array and shift a cat to new array
function removeFirstCat(){
    const newCats = cats.slice()
    newCats.shift()
    return newCats
}
removeFirstCat()

console.log(cats)