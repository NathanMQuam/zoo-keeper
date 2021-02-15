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

export default Pokemon