const sleep = (sleepDuration) => {
  const now = new Date().getTime();
  while (new Date().getTime() < now + sleepDuration);
}; 

const prepareBigMac = (callback) => {
  setTimeout(() => {
    console.log('1 - Big Mac');
    callback();
  }, Math.random()* 4000);
}
const prepareMilkShake = () => {
  setTimeout(() => {
    console.log('2 - Milk Shake');
  }, Math.random()* 4000);
} 

console.log('INÍCIO');

// prepareBigMac();
// prepareMilkShake();
prepareBigMac(prepareMilkShake);
console.log('FIM');


