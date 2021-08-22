import { Observable, pipe, map, of } from "rxjs";

// const obs = new Observable(function (subscriber) {
//   try {
//     setTimeout(() => subscriber.next("gouda"), 1000);
//     setTimeout(() => subscriber.next("muster"), 2000);
//     setTimeout(() => subscriber.next("pepper jack"), 3000);
//     setTimeout(() => subscriber.complete(), 3100);
//   } catch (error) {
//       subscriber.error(error)
//   }
// })
// .pipe(
//     map((x) => `Cheese: ${x}`)
// );

// const cheeses = [];
// obs.subscribe({
//   next: (x) => {cheeses.push(x); console.log("Received Data")},
//   error: (err) => {console.log(err)},
//   complete: () => {console.log(cheeses)},
// });

const obs = of("gouda", "munster", "Pepper Jack")

obs.subscribe((x) => console.log(x))