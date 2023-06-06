const sentence = "I am learning asynchronous code flow";
let timer = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer += 50);
};
setTimeout(() => {
  console.log();
}, timer);