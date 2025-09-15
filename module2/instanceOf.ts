{
      class Animal {
            name: string;
            species: string

            constructor(name: string, species: string) {
                  this.name = name;
                  this.species = species
            }

            getSound() {
                  console.log("The animal has sound")
            }
      }

      class Dog extends Animal {
            constructor(name: string, species: string) {
                  super(name, species)
            }
            getBarking() {
                  console.log(`${this.name} is Barking`)
            }
      }
      class Cat extends Animal {
            constructor(name: string, species: string) {
                  super(name, species)
            }
            getMew() {
                  console.log(`${this.name} is Mewing`)
            }
      }

      const cat = new Cat("Persian", "Cat")
      const dog = new Dog("German", "Dog")

      const getDogType = (animal: Animal): animal is Dog => {
            return animal instanceof Dog
      }
      const getCatType = (animal: Animal): animal is Cat => {
            return animal instanceof Cat
      }

      const getAnimal = (animal: Animal) => {
            if (getDogType(animal)) {
                  console.log(animal.getBarking)
            } else if (getCatType(animal)) {
                  console.log(animal.getMew)
            } else {
                  console.log(animal.getSound)
            }
      }

      getAnimal(dog)


}