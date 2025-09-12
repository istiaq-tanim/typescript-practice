type FrontEnd = {
      skills: string[];
      designation1: "Frontend Developer"
}
type BackEnd = {
      skills: string[];
      designation2: "Backend Developer"
}

type FullStack = FrontEnd & BackEnd

const fullStackDeveloper: FullStack = {
      skills: ["html", "css", "js", "node", "express"],
      designation1: "Frontend Developer",
      designation2: "Backend Developer"
}

const isAuthenticated = ""

const isGuest = isAuthenticated ?? "Guest"

console.log({ isGuest })

type User = {
      name: string;
      age: number;
      permanentAddress: {
            district: string,
            country: string
      }
      presentAddress?: {
            district: string,
            country: string
      }
}

const user: User = {
      name: "Istiaq",
      age: 30,
      permanentAddress: {
            district: "Brahmanbaria",
            country: "Bangladesh"
      }
}

console.log(user?.presentAddress?.country ?? "User present Address Not Found")


