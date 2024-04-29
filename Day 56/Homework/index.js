for (let i = 1; i <= 20; i++) {
    console.log(`Checking number: ${i}`);

    if (i % 2 === 0) {
        console.log(`${i} is divisible by 2`);
    } else if (i % 3 === 0) {
        console.log(`${i} is divisible by 3`);
    } else {
        console.log(`${i} is not divisible by 2 or 3`);
    }
}

let j = 1;
while (j <= 5) {
    console.log(`Current value of j: ${j}`);
    j++;
}
