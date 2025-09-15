{


      type NormalUSer = {
            name: string
      }

      type AdminUser = {
            name: string;
            role: "admin"
      }

      const getUser = (user: NormalUSer | AdminUser) => {
            if ("role" in user) {
                  console.log(`${user.name} role is ${user.role}`)
            } else {
                  console.log(`User name is ${user.name}`)
            }
      }

      const normalUser: NormalUSer = {
            name: "rasel"
      }

      const adminUser: AdminUser = {
            name: "sakib",
            role: "admin"
      }

      const user = getUser(adminUser)
      console.log(user)
}