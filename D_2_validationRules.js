/*2. Create a function that takes an object and a set of validation rules as property descriptors. Validate
each property according to the rules and return a new object with validated properties. */

function validation(obj, defineDescriptors ) {

    let newObj = {};
    for(let key in obj) Object.defineProperty(newObj, key,{ ...defineDescriptors[key], value:obj[key]});
    return  newObj

}

const obj = {
    name: 'Hakob',
    age: 26
  }
  
  const rules = {
    name: {
      enumerable: true,
      writable: false
    },
    age: {
      enumerable: true,
      writable: true,
      configurable: true,
    }
  }
let newObject = validation(obj, rules);
console.log(newObject)



