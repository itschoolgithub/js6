/*
    let a;
    let b = 3;

    while(a != b) {
        a = prompt("Угадай число 1 - 5");
    }

    do {
        a = prompt("Угадай число 1 - 5");
    } while(a != b);

    alert("Ты угадал!");
*/

/*
    let i = 5;

    while (i < 5) {
        console.log(i);
        i++;
    }

    do {
        console.log(i);
        i++;
    } while (i < 5);
*/

/*
    for (let i = 0; i < 5; i = i + 1) {
        console.log(i);
    }

    let j = 0;
    for (; j < 5;) {
        console.log(j);
        j = j + 1;
    }
*/

let colors = ["red", "blue", "green", "yellow", "black", "pink"];

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);

// for (let a = 0; a < colors.length; a++) {
//     console.log("Цвет с номером " + a + ": " + colors[a]);
// }

for (let color of colors) {
    // if (color == 'green') {
    //     break;
    // }
    if (color == "green") {
        continue;
    }
    console.log(color);
}