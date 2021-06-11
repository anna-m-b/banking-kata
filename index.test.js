const { deposit, getBalance, withdraw } = require("./index.js");


test("balance is updated when a client deposits money", () => {
  deposit(200);
  expect(getBalance()).toBe(200)
});

test("balance decreases when a client withdraws money", () => {
  withdraw(50)
  expect(getBalance()).toBe(150)
})

test("")


// ***Given a client makes a deposit of 1000 on 10/01/2021***
// ***And a deposit of 2000 on 13/01/2021***
// ***And a withdrawal of 500 on 14/01/2021***
// ***When they print their bank statement***
