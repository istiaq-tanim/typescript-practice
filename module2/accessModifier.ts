{
      class User {
            public readonly id: number;
            public name: string;
            private _balance: number

            constructor(id: number, name: string, balance: number) {
                  this.id = id;
                  this.name = name
                  this._balance = balance
            }

            addBalance(amount: number) {
                  return this._balance = this._balance + amount
            }

            getBalance() {
                  return this._balance
            }
      }

      const user = new User(111, "Rasel", 5000)

      user.addBalance(2000)
      const myBalance = user.getBalance()

      console.log(myBalance)

}