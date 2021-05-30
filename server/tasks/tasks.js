const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')

const basePath = 'server/assets';
let $ = null;

const ALCOHOLS = [
  'whiskey',
  'gin',
  'bourbon',
  'vodka',
  'rum'
]

function buildDrinkObjects() {
  console.log("building drink objects from HTML");
  const files = fs.readdirSync(basePath);
  let drinks = [];
  
  for (const file of files) {
    let recipe = getRecipe(file)
    let drinkName = $(recipe).find("h1.item-title").text();
    let rating = getRating($(recipe).find(".item-rating").first())
    let difficulty = getDifficulty(recipe)
    let ingredients = getIngredients($(recipe).find(".instruction-item-list").first())
    let directions = getDirections($(recipe));
    let alcohols = getAlcohols();
    let flavors = getFlavors();
    let glass = getGlass();
    let tags = getTags();
    // let equipment = getEquipment($(recipe).find('.instruction-item-list')[1])
    let drink = {
      drinkId: slugify(drinkName),
      drinkName: drinkName,
      imageUrl: '',
      ingredientList: ingredients,
      directions: directions,
      baseIngredients: [],
      glass: glass || '',
      alcohol: alcohols || [],
      flavors: flavors || [],
      tags: tags || []
    }
    drinks.push(drinks)
  }
  // write json file of drinks
}

function getRecipe(file) {
  let filePath = path.join(basePath, file)
  let htmlfile = fs.readFileSync(filePath, 'utf8')
  $ = cheerio.load(htmlfile);
  return $('#recipe')
}

function getIngredients(item) {
  if (item.attr('itemprop') == 'ingredients') {
    return item.children('li').get().map((list) => {
      let $list = $(list);
      
      if (!$list.hasClass('.instruction-item-list-units')) {
        return {
          ingredient_name: $list.find('div.instruction-item-list-detail').text().trim(),
          ingredient_value: $list.find('span.instruction-item-list-quantity-value').data('initialvalue'),
          ingredient_unit: $list.find('span.instruction-item-list-quantity-value').data('unit')
        }
      }
    });
  }
}

function getDifficulty(item) {
  return item.find('.item-difficulty span').first().text()
}

function getRating(itemRating) {
  return itemRating.find('label.star-full').length
}

function getDirections(recipe) {
  return recipe
         .find('[itemprop="recipeInstructions"]')
         .children('li')
         .get()
         .map((direction) => $(direction).find('div').text())
}

function runTasks() {
  // task scripts
  console.log('Running tasks');
  buildDrinkObjects();
}

module.exports = {runTasks};
