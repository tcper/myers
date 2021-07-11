
function backtrack(a, b, inputD) {
  const move = [];
  let x = a.length;
  let y = b.length;

  const N = a.length;
  const M = b.length;
  const HALF = Math.floor((M+N) / 2);
  
  let prev_x, prev_y, prev_k;
  let D = inputD;

  for(let i = trace.length - 1; i >= 0; i--) {
    const v = trace[i];
    // console.log(i, v);

    let k = x - y
    console.log("i:", x, y, i, k);
    if (x ===0 && y === 0) {
      continue;
    }
    if (k === -D || (k !== D && v[HALF+k-1] < v[HALF+k+1])) {
      prev_k = k+1;
    } else {
      prev_k = k-1;
    }
    console.log('prev k:', prev_k)
    prev_x = v[HALF+prev_k];
    prev_y = prev_x - prev_k;
    console.log(prev_x, prev_y)
    // move.push([prev_x, prev_y]);

    while(x > prev_x && y > prev_y) {
      move.push([[x, y] ,[x-1, y-1]]);
      x = x - 1;
      y = y - 1;
    }
    move.push([[x, y], [prev_x, prev_y]]);
    
    x = prev_x;
    y = prev_y;    
  }
  return move;
}
const a = 'ABCABBA';
const b = 'CBABAC';
const D = myer(a, b);
console.log(trace);
console.log('======')
const track = backtrack(a, b, D);
track.forEach(item => {
  console.log(item[1], '=>', item[0])
})