let ans = 0;
let iterations = 0;
for (let i = 1; i <= 50; i++) {
    ans = ans + i;
    iterations++;
}
console.log(ans);
console.log(`Total iterations: ${iterations}`);
