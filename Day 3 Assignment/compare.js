let obj1 = {name:"person1", age:5};
let obj2 = {age:5, name:"person1"};

var compare=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(let key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            compare=false;
            break;
        }
    }
}
else {
    compare=false;
}
console.log(compare);