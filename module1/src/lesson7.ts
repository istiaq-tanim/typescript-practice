{
      let user: any

      user = "rasel";

      (user as string).charCodeAt(3)

      const convertKgToGram = (value: number | string): string | number | undefined => {
            if (typeof value === "string") {
                  const convertedValue = parseFloat(value) * 1000
                  return `The converted value is ${convertedValue}`
            } else if (typeof value === "number") {
                  return value * 1000
            }
      }

      const result1 = convertKgToGram("1000") as string
      const result2 = convertKgToGram(1000) as number

      type CustomError = {
            message: string
      }

      try {

      } catch (error) {
            console.log((error as CustomError).message)
      }


      type User1 = {
            name: string;
            age: number
      }

      interface User2 {
            name: string;
            age: number
      }



      type UserWithRole1 = User1 & { role: string }

      interface UserWithRole2 extends User1 {
            role: string
      }


      const User: UserWithRole2 = {
            name: "Rasel",
            age: 31,
            role: "VAT Admin"
      }

}