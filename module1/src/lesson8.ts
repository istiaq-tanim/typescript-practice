{
      type GenericArray<T> = Array<T>

      const numberArray: GenericArray<number> = [5, 10, 15, 20]

      const staringArray: GenericArray<string> = ["Afjal", "Rasel", "Sakib"]


      const user: GenericArray<{ name: string, age: number }> = [
            {
                  name: "Sakib",
                  age: 30
            },
            {
                  name: "Afjal",
                  age: 31
            },
            {
                  name: "Tanim",
                  age: 30
            }
      ]

      type GenericTuple<X, Y> = [X, Y]

      const marrideMan: GenericTuple<string, { age: number, isEmployed: boolean }> = ["afjal", { age: 31, isEmployed: true }]



      interface Developer<T, Y = null> {
            name: string;
            computer: {
                  brand: string,
                  model: string;
                  releaseYear: number
            },
            smartWatch: T,
            bike?: Y
      }

      type SmartWatch = {
            brand: string,
            display: string
      }
      type SmartWatchRich = {
            brand: string;
            display: string;
            heartBeatChecker: boolean
      }

      interface Bike {
            brand: string,
            model: string
      }

      const poorDeveloper: Developer<SmartWatch> = {
            name: "Istiaq",
            computer: {
                  brand: "MSI",
                  model: "Z500",
                  releaseYear: 2021
            },
            smartWatch: {
                  brand: "MI",
                  display: "OLED"
            }
      }
      const richDeveloper: Developer<SmartWatchRich, Bike> = {
            name: "Ashik",
            computer: {
                  brand: "Apple",
                  model: "M2",
                  releaseYear: 2022
            },
            smartWatch: {
                  brand: "Apple",
                  display: "OLED",
                  heartBeatChecker: true
            },
            bike: {
                  brand: "Yamaha",
                  model: "FZ-S"
            }
      }
}