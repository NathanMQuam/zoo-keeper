class PC {
   constructor() {
      this.boxList = {}
   }

   addToBox(pokemon, type) {
      type = type.toString()
      // let type = pokemon.type.toString()
      //let box = this.boxList[type]

      if(this.boxList[type] == undefined) {
         this.boxList[type] = [pokemon]
         //box = [pokemon]
      } else {
         this.boxList[type].push(pokemon)
         //box.push(pokemon)
      }
      // console.log(this.boxList);
      // NOTE: The three commented lines above do not work when replacing: 'this.boxList[type]'
   }

   getBox(type) {
      return this.boxList[type]
   }
}