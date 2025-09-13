{
      class Animal {
            // name: string;
            // species: string;
            // sound: string;

            // public parameter

            constructor(public name: string, public species: string, public sound: string) {
                  // this.name = name;
                  // this.species = species;
                  // this.sound = sound
            }
            getSound() {
                  console.log(`${this.name} sound like ${this.sound}`)
            }
      }

      const dog = new Animal("German Shephard", "dog", "Ghew Ghew")

      dog.getSound()
}

