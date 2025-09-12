// array 

const friends: string[] = ["Afjal", "Sakib"]

friends.push("Tusan")

//tuple

const coordinate: [number, number] = [1, 2]

const nameAge: [string, number, boolean] = ["Istiaq", 30, false]

// object
const person: {
      firstName: string;
      middleName?: string;
      lastName: string;
      isMarried: boolean;
      company: "Zone Sparks Limited";
      readonly designation: string

} = {
      firstName: "Kazi",
      lastName: "Mahamud",
      isMarried: false,
      company: "Zone Sparks Limited",
      designation: "Frontend Developer"
}


// function

function add(a: number, b: number): number {
      return a + b
}

const arrowAdd = (a: number, b: number): number => a + b

// method

const account = {
      name: "Istiaq",
      age: 30,
      balance: 1000,
      addBalance(newBalance: number): string {
            return `My new Balance is ${this.balance + newBalance}`
      }
}

const array: number[] = [1, 2, 3]

const squareOfArray: number[] = array.map((elem: number): number => elem * elem)

