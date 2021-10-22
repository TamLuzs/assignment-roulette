let name = ['👦 Guilherme', '👩 Tamires'];
let position = 0;
function next() {
    show(name[position]);

    if (position < name.length - 1) {
        position++;

    } else {
        position = 0;
    }
}

function show(name) {
    document.querySelector(".updateName").innerHTML = name;

}