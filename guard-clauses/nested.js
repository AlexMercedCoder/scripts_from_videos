function divBy3and5(num) {
  if (num % 3 === 0) {
    if (num % 5 === 0) {
      console.log("Divisible by 3 & 5");
    } else {
      console.log("Not divisible by 5");
    }
  } else {
    console.log("Not divisible by 3");
  }
}
