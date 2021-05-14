const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', () => {
  const n = Number(input.value);
  print('Waiting...');
  const now = Date.now();
  const res = fibonacci3(n);
  const interval=setInterval(()=>{
    const{value,done}=res.next();
    if(done){
       const costInMs = Date.now() - now;
      print(`Result: ${value} in ${costInMs}ms`);
      clearInterval(interval);
    }
},1000/60)
 
});

function fibonacci1(n) {
  if (n <= 2) {
    return 1;
  }
  let i = 2;
  let prev = 1
  let cur = 1;
  while(i < n) {
    const temp = cur;
    cur = cur + prev;
    prev = temp;
    i++;
  }
  return cur;
}

function fibonacci2(n) {
  if(n<=2) {
    return 1;
  }
  return fibonacci2(n - 1) + fibonacci2(n - 2);
}

const log = document.querySelector('.log');
function print(str) {
  log.innerText = str;
}

function *fibonacci3(n) {
  if (n <= 2) {
    return 1;
  }
  let i = 2;
  let prev = 1
  let cur = 1;
  while(i < n) {
    const temp = cur;
    cur = cur + prev;
    prev = temp;
    yield;
    i++;
  }
  return cur;
}