function divBy3and5(num) {
    // Guard Clauses
    if (!num % 3 === 0){
        console.log("not divisible by 3")
        return 0
    }
    if (!num % 5 === 0){
        console.log("not divisible by 5")
        return 0
    }
    // Process
    console.log("divisble by 3 and 5")
  }