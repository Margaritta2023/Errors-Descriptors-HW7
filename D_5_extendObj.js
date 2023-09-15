function extend(obj, extensions) {

    Object.defineProperties(obj,extensions);

    return obj

}

const myObj = { prop1: "value1" };

console.log(extend(myObj, {
prop2: { value: "value2", writable: false , enumerable: true},
prop3: {
get() {
return "computed";
}, enumerable: true ,
},
}));




  