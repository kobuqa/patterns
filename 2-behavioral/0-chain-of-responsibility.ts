/**
 * Problem: to make a sequence of transformations/calls and interrupt that chain on fail(there is no sense to continue if some step failed)
 */

interface Handler {
  next: null | Handler;
  setNext(handler: Handler);
  handle: Function;
}

interface User {
  isAuth: boolean;
  balance: number;
}

const authUser: User = {
  isAuth: true,
  balance: 100,
};

const unauthUser: User = {
  isAuth: false,
  balance: 100,
};

const createHandler = (handle): Handler => ({
  next: null,
  handle,
  setNext(handler: Handler) {
    this.next = handler;
  },
});

const auth: Handler = createHandler(function (request) {
  console.log("[Auth]: Initiated");
  if (request.isAuth && this.next) {
    console.log("[Auth]: Success");
    this.next.handle(request);
  } else console.log("[Auth]:  Unauthenticated user");
});

const checkBalance: Handler = createHandler(function (request) {
  console.log("[Balance]: Initiated");
  if (request.balance > 0 && this.next) {
    console.log("[Balance]: Success");
    this.next.handle(request);
  } else console.log("[Balance]: Low balance");
});

const pay: Handler = createHandler(function (request) {
  console.log("[Pay]: Initiated");
  if (!this.next) console.log(`[Pay]: Job Done!`);
});

auth.setNext(checkBalance);
checkBalance.setNext(pay);

function makePayment(user) {
  auth.handle(user);
}

makePayment(authUser); // full flow
makePayment(unauthUser); // will be interrupted on auth stage
