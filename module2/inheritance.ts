{
      //inheritance

      class Person {
            name: string;
            age: number;
            address: string;

            constructor(name: string, age: number, address: string) {
                  this.name = name
                  this.age = age
                  this.address = address
            }

            getSleep(hours: number) {
                  console.log(`${this.name} will sleep ${hours}`)
            }
      }
      class Student extends Person {


            constructor(name: string, age: number, address: string) {
                  super(name, age, address)
            }


      }
      class Teacher extends Person {
            designation: string

            constructor(name: string, age: number, address: string, designation: string) {
                  super(name, age, address)
                  this.designation = designation
            }
            getClass(hours: number) {
                  console.log(`${this.name} will get class ${hours}`)
            }
      }

      const teacher = new Teacher("Rubaiya Ferdouse", 35, "Bangladesh", "Professor")
      const student = new Student("Istiaq", 30, "Bangladesh")

      student.getSleep(5)


}