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

            set deposit(amount: number) {
                  this._balance = this._balance + amount
            }

            get balance() {
                  return this._balance
            }
      }

      const user = new User(111, "Rasel", 5000)
      user.deposit = 100
      const amount = user.balance
      console.log(amount)

}