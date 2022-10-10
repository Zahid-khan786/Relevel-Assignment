// Q1


// Q2
function* nextNatural() {
    let naturalNumber = 1;
    while (true) {
        yield naturalNumber++;
    }
}

var gen = nextNatural();

for (var i = 0; i < 10; i++) {

    let x = (gen.next().value);
    let y = Math.log10(x) / Math.log10(3)
    if (y - Math.floor(y) == 0)
        console.log(x);
    else
        continue;
}

// Q3
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1");
    }, 2000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise2");
    }, 3000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise3");
    }, 1000);
})

Promise.all([p1, p2, p3]).then((prMsgs) => {
    console.log(prMsgs);
}).catch((err) => {
    console.log("Error : " + err);
})


Promise.race([p1, p2, p3]).then((prMsgs) => {
    console.log(prMsgs);
}).catch((err) => {
    console.log("Error : " + err);
})
