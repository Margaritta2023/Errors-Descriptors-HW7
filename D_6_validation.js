function validation(obj, schema ) {

    let validity = true;

    for (let key in obj) {

      let temp = Object.getOwnPropertyDescriptor(obj, key);

      if(temp.writable !== schema[key].writable || !schema[key].validate(obj[key])) validity = false;
      
    }
    
    if(validity) return "Validation sucsess";
    else return "Invalid keys"
}

const schema = {
    name: {
    value: "",
    writable: true,
    validate: (value) => typeof value === "string",
    },
 
    age: {
    value: 0,
    writable: true,
    validate: (value) => typeof value === "number" && value >= 18,
    },
    };


    let obj = {
        name: "Botichelli",
        age: 38
    }


    console.log(validation(obj, schema))


