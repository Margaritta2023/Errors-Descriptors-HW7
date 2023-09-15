// 1.Write an object with getter/setter field name.
const obj = {

    _name : [],

    set name(str){

      str.split(",").map( item => this._name.push([item, item.length]))
    },

    get name(){
        return  this._name
    }
}


obj.name = "Hamlet, Artavazd";
console.log(obj.name); // [['Hamlet', 6], ['Artavazd', 8]]