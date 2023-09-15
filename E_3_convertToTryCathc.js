function reverseString(s){
    try{
      s = s.split('').reverse().join('');
    }catch (e) {
      console.log(e.message);
    }
    console.log(s);
  }

  console.log(reverseString("abcd"))
  console.log(reverseString(Number(1234)))
  console.log(reverseString({a:1, b:2})) 