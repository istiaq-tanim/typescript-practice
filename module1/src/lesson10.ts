{
      // constraint type with key of
      const findObject = <X, Y extends keyof X>(obj: X, key: Y) => {
            return obj[key]
      }

      const user = {
            name: "Istiaq",
            age: 30,
            isMarried: false
      }

      const result1 = findObject(user, "age")


      //mapped Type

      type AreaNumber = {
            height: number;
            width: number
      }

      type AreString<T> = {
            [key in keyof T]: T[key]
      }

      const area1: AreString<{ height: string, width: number }> = {
            height: "100",
            width: 150
      }
}