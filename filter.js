let names = [
    "grass",
    "poison",
    "grass",
    "poison",
    "grass",
    "poison",
    "fire",
    "fire",
    "fire",
    "flying",
    "water",
    "water",
    "water",
    "bug",
    "bug",
    "bug",
    "flying",
    "bug",
    "poison",
    "bug",
    "poison",
    "bug",
    "poison",
    "normal",
    "flying",
    "normal",
    "flying",
    "normal",
    "flying",
    "normal",
    "normal",
    "normal",
    "flying",
    "normal",
    "flying",
    "poison",
    "poison",
    "electric",
    "electric",
    "ground",
    "ground",
    "poison",
    "poison",
    "poison",
    "ground",
    "poison",
    "poison",
    "poison",
    "ground",
    "fairy",
    "fairy",
    "fire",
    "fire",
    "normal",
    "fairy",
    "normal",
    "fairy",
    "poison",
    "flying",
    "poison",
    "flying",
    "grass",
    "poison",
    "grass",
    "poison",
    "grass",
    "poison",
    "bug",
    "grass",
    "bug",
    "grass",
    "bug",
    "poison",
    "bug",
    "poison",
    "ground",
    "ground",
    "normal",
    "normal",
    "water",
    "water",
    "fighting",
    "fighting",
    "fire",
    "fire",
    "water",
    "water",
    "water",
    "fighting",
    "psychic",
    "psychic",
    "psychic",
    "fighting",
    "fighting",
    "fighting",
    "grass",
    "poison",
    "grass",
    "poison",
    "grass",
    "poison",
    "water",
    "poison",
    "water",
    "poison",
    "rock",
    "ground",
    "rock",
    "ground",
    "rock",
    "ground",
    "fire",
    "fire",
    "water",
    "psychic",
    "water",
    "psychic",
    "electric",
    "steel",
    "electric",
    "steel",
    "normal",
    "flying",
    "normal",
    "flying",
    "normal",
    "flying",
    "water",
    "water",
    "ice",
    "poison",
    "poison",
    "water",
    "water",
    "ice",
    "ghost",
    "poison",
    "ghost",
    "poison",
    "ghost",
    "poison",
    "rock",
    "ground",
    "psychic",
    "psychic",
    "water",
    "water",
    "electric",
    "electric",
    "grass",
    "psychic",
    "grass",
    "psychic",
    "ground",
    "ground",
    "fighting",
    "fighting",
    "normal",
    "poison",
    "poison",
    "ground",
    "rock",
    "ground",
    "rock",
    "normal",
    "grass",
    "normal",
    "water",
    "water",
    "water",
    "water",
    "water",
    "water",
    "psychic",
    "psychic",
    "fairy",
    "bug",
    "flying",
    "ice",
    "psychic",
    "electric",
    "fire",
    "bug",
    "normal",
    "water",
    "water",
    "flying",
    "water",
    "ice",
    "normal",
    "normal",
    "water",
    "electric",
    "fire",
    "normal",
    "rock",
    "water",
    "rock",
    "water",
    "rock",
    "water",
    "rock",
    "water",
    "rock",
    "flying",
    "normal",
    "ice",
    "flying",
    "electric",
    "flying",
    "fire",
    "flying",
    "dragon",
    "dragon",
    "dragon",
    "flying",
    "psychic",
    "psychic"
]
const filteredArray = names.filter(function(ele , pos){
    return names.indexOf(ele) == pos;
}) 

console.log("The filtered array ",filteredArray);