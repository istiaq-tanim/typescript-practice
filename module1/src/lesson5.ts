{

      // spread

      const friendSchool: string[] = ["Afjal", "Sakib", "Tusan"]

      const friendArea: string[] = ["Rasel", "Tipu", "Shawon"]

      friendSchool.push(...friendArea)


      const friends = (...friends: string[]) => {
            return friends.forEach((friend: string) => console.log(`Hi ${friend}`))
      }

      friends("Rasel", "Sakib", "Afjal")

      //destructing

      const person = {
            name: "istiaq",
            age: 30,
            address: {
                  permanentAddress: {
                        district: "Brahmanbaria",
                        village: 'Collegepara',
                        country: "Bangladesh"
                  },
                  presentAddress: {
                        district: "Dhaka",
                        area: 'Uttara',
                        country: "Bangladesh"
                  }
            }

      }

      const { name, address: { permanentAddress: { district: myDistrict } } } = person

      console.log(myDistrict)


      type add = (number1: number, number2: number) => number

      const add: add = (number1, number2) => number1 + number2
}