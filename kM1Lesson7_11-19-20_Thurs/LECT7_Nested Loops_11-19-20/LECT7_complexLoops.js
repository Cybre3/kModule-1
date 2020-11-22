let n = 10;

for (let i = n; i > 0; i--) {
    console.log(i);
}

for (let i = 1; i <= n; i += 2) {
    console.log(i);
}

n = 100;

for (let i = 1; i <= n; i *= 2) {
    console.log(i);
}

for (let i = n; i > 1; i /= 2){
    console.log(i);
}