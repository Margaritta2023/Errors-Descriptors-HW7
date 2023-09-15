function reverseString(str){
    try{
      str = str.split('').reverse().join('');
    }catch (error) {
      console.log(error.message);
    }
    return str;
  }

  console.log(reverseString("abcd"))
  console.log(reverseString(Number(1234)))
  console.log(reverseString({a:1, b:2}))
