function deepClone( obj ) {

    let newObj = {};

    for (let key in obj) {

         if(typeof key === "object") deepClone( key );
         else {
         Object.defineProperty(newObj, key, Object.getOwnPropertyDescriptor(obj,key));  
        }
    }
   
    return newObj;
 
}


const objectinio = {
    name: 'Donatella',
    age: 26,
    showroom:{city:'NY', quantity: 26}
  }

  console.log(deepClone( objectinio ))