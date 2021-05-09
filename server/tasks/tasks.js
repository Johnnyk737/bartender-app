const fs = require('fs')
const path = require('path')
const DOMParser = require('dom-parser')

const basePath = 'server/assets';
let parser = new DOMParser();

function buildDrinkObjects() {
  console.log("building drink objects from HTML");
  const files = fs.readdirSync(basePath);
  
  for (const file of files) {
    let recipe = getRecipe(file)
    console.log(recipe.attributes)
    // let children = recipe.childNodes
    let drinkName = recipe.getElementsByClassName("item-title")[0].innerHTML
    let rating = getRating(recipe.getElementsByClassName("item-rating")[0])
    let difficulty = getDifficulty(recipe)
    let ingredients = getIngredients(recipe.getElementsByClassName("instruction-item-list")[0])
    break;
  }
}

function getRecipe(file) {
  let filePath = path.join(basePath, file)
  let htmlfile = fs.readFileSync(filePath, 'utf8')
  var text = htmlfile.replace(/\n[ ]*/g, "");
  let doc = parser.parseFromString(text, 'text/html')
  return doc.getElementById('recipe');
}

function getIngredients(item) {
  console.log(item)
}

function getDifficulty(item) {
  return item.getElementsByClassName("item-hero")[0]
             .getElementsByClassName("item-difficulty")[0]
             .getElementsByTagName("span")[0].innerHTML
}

function getRating(itemRating) {
  return itemRating.getElementsByClassName("star star-full").length
}

function runTasks() {
  // task scripts
  console.log('Running tasks');
  buildDrinkObjects();
}

module.exports = {runTasks};
