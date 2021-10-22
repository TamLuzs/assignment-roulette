let name = ['Guilherme', 'Tamires'];
let position = 0;
let salve;

let namesObj = arrayToObject(name);

function arrayToObject(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; ++i) {
        obj[i] = arr[i];
    }
    return obj;
} 

JSON.stringify(namesObj);


function show() {
    next(name[position]);

    if (position < name.length - 1) { 
        salve = name[position];

        position++;

        

    } else {
        salve = name[position];
        position = 0;
        
    }
}

function next(name) {
    document.querySelector(".nameUpdate").innerHTML = name;
    document.querySelector(".last").innerHTML = salve;
}