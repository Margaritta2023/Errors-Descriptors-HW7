function isPositive(num) {
    try {
      if(num === 0) throw  Error ("Zero Error");
      if(num < 0) throw  Error("Negative Error");

    } catch (error) {
      console.log(error.message);
    }
    if(num > 0) return "YES"
  }

  console.log(isPositive(0))
  console.log(isPositive(-5))
  console.log(isPositive(20))
