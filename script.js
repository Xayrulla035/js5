let = +prompt("raqam kiriting")

while (isNaN(let) || let === 0){
    let = +prompt("son kiriting dedim")
}
let let1 = ""

while (isNaN(let1) || let1 === 0){
    let1 = +prompt("raqam kirit dvoman")
}

for (let i = 1; i <= let; i++) {
    for(let j = 1; j <= 1; j++){
        if(i == 1) {
            let1 = i + " qo'y..."
        }else{
            let1 += i + " qo'ylar..."
        }
    }
}
console.log(let && let1);



let raqam = +prompt("Kvadrat tomonlari sonini kiriting?");

while (isNaN(raqam) || raqam <= 0) {
  raqam = +prompt("Iltimos, son kiriting!");
}

for (let i = 0; i < raqam; i++) {
  let natija = "";

  for (let j = 0; j < raqam; j++) {
    if (i === 0 || i === raqam - 1 || j === 0 || j === raqam - 1 || i === j) {
      natija += "[*]";
    } else {
      natija += "   ";
    }
  }

  console.log(natija);
}