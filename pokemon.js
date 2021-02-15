class Pokemon {
   /**
    * @param {String} name
    * @param {Number} hp
    * @param {Number} level
    * @param {String} type1
    * @param {String} type2
    * @param {String} gender
    */
   constructor(name, hp, level, type1, type2 = "", gender){
      this.name = name
      this.hp = hp
      this.level = level
      this.gender = gender
      this.type1 = type1
      this.type2 = type2
   }
}









// NOTE: All Pokemon sub-classes:
// #region

class Absol extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "dark", "", gender)
   }
}

class Bulbasaur extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "grass", "", gender)
   }
}

class Charmander extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "fire", "", gender)
   }
}

class Ditto extends Pokemon {
   constructor (name, hp, level) {
      super(name, hp, level, "normal", "", "")
   }
}

class Eevee extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "normal", "", gender)
   }
}

class Furret extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "normal", "", gender)
   }
}

class Goodra extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "dragon", "", gender)
   }
}

class Heracross extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "bug", "fighting", gender)
   }
}

class Ivysaur extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "grass", "", gender)
   }
}

class Joltik extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "electric", "", gender)
   }
}

class Kadabra extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "psychic", "", gender)
   }
}

class Lapras extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "water", "ice", gender)
   }
}

class Metagross extends Pokemon {
   constructor (name, hp, level) {
      super(name, hp, level, "steel", "psychic", "")
   }
}

class Ninetails extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "fire", "", gender)
   }
}

class Onix extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "rock", "ground", gender)
   }
}

class Pikachu extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "electric", "", gender)
   }
}

class Quilava extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "fire", "", gender)
   }
}

class Ribombee extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "bug", "fairy", gender)
   }
}

class Scorbunny extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "fire", "", gender)
   }
}

class Tropius extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "grass", "flying", gender)
   }
}

class Umbreon extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "dark", "", gender)
   }
}

class Venusaur extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "grass", "", gender)
   }
}

class Wishiwashi extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "water", "", gender)
   }
}

class Xatu extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "psychic", "flying", gender)
   }
}

class Yamask extends Pokemon {
   constructor (name, hp, level, gender) {
      super(name, hp, level, "ghost", "", gender)
   }
}

class Zeraora extends Pokemon {
   constructor (name, hp, level) {
      super(name, hp, level, "electric", "", "")
   }
}

//#endregion