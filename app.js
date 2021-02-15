// NOTE: Requirements
// Part 1:
// TODO: Create a new animal class for every letter of the alphabet.
// Part 2:
// TODO: Create at least one instance of every animal class
// Part 3:
// TODO: Group like animals in collections. Utilize array methods, e.g., .push()
//       Hint: how could you utilize a new class, Pen, or Cage, to accomplish Part 3?



let fakemon = new Axolotl("Mudkip", 5, 0, "male")
console.log("The Axolotl:", fakemon.name, "is a Pokemon?:", fakemon.pokemon)

// let myMon = new Absol()
// console.log(myMon);

// myMon = new Xatu()
// console.log(myMon);

const pokemonInventory = [
   new Absol("Abby", 100, 20, "Female"), 
   new Bulbasaur(),
   new Charmander(),
   new Ditto(),
   new Eevee(),
   new Furret(),
   new Goodra(),
   new Heracross(),
   new Ivysaur(),
   new Joltik(),
   new Kadabra(),
   new Lapras(),
   new Metagross(),
   new Ninetails(),
   new Onix(),
   new Pikachu(),
   new Quilava(),
   new Ribombee(),
   new Scorbunny(),
   new Tropius(),
   new Umbreon(),
   new Venusaur(),
   new Wishiwashi(),
   new Xatu(),
   new Yamask()
]

pokemonInventory.push(new Zeraora())

console.log(pokemonInventory);

let myPC = new PC()
//myPC.addToBox(pokemonInventory[0])

pokemonInventory.forEach(mon => {
   myPC.addToBox(mon, mon.type1)
   mon.type2 != "" ? myPC.addToBox(mon, mon.type2) : undefined
})
console.log(myPC.boxList);