/* 3.Implement an Immutable class that creates objects with immutable properties. Any attempt to
modify a property should result in an error. */

function immutable(obj) {

    let newObj =Object.freeze({...obj}) ;
    
    return  newObj

}

const obj = {
    name: 'Hakob',
    age: 26
  }
  
  
let newObject = immutable(obj);
console.log(Object.isFrozen(newObject))



