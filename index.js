let balance = 0;

function deposit(deposit) {
  balance += deposit;
}

function getBalance() {
  return balance;
}

function withdraw(amount) {
  balance -= amount;
}

module.exports = {
  getBalance,  
  deposit,
  withdraw,
};