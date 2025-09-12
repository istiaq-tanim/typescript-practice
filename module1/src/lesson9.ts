{

      //generic type with function
      type User = {
            name: string;
            isMarried: boolean
      }

      const createArrayWithGeneric = <T>(param: T): T[] => {
            return [param]
      }

      const result1 = createArrayWithGeneric<string>("Istiaq")
      const result2 = createArrayWithGeneric<number>(123)

      const result3 = createArrayWithGeneric<User>({ name: "Sakib", isMarried: true })

      const createTupleWithGeneric = <T, Q>(param1: T, param2: Q): [T, Q] => {
            return [param1, param2]
      }

      const result4 = createTupleWithGeneric<string, { age: number, isMarried: boolean }>("Istiaq", { age: 30, isMarried: false })


      //constraint

      const addCourse = <T extends { id: number; name: string; email: string }>(user: T) => {
            const course = "ML Course"

            return {
                  ...user,
                  course
            }
      }

      const result6 = addCourse<{ id: number; name: string; email: string; age: number }>(
            {
                  id: 1234,
                  email: "istiaq.tanim17@gmail.com",
                  name: "istiaq",
                  age: 30
            }
      )
      const result7 = addCourse<{ id: number; name: string; email: string; isMarried: boolean; age: number }>({ name: "rasel", age: 30, isMarried: true, id: 12345, email: "rasel@gmail.com" })
}