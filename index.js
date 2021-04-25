function myer(a, b) {
  const N = a.length;
  const M = b.length;
  const V = [];
  let y = 0; x = 0;
  const MAX = M+N;
  const HALF = Math.floor((M+N) / 2);

  for (let p = 0; p < MAX; p++) {
    V[p] = -1;
  }
  V[HALF+1] = 0;

  for (let D = 0; D < MAX; D++) {
    // k loop
    for (let k = -D; k <= D; k += 2) {
      if (k === -D || (k != D && V[HALF + k-1] < V[HALF + k+1])) {
        // first step || 
        x = V[HALF + k+1];
      } else {
        x = V[HALF + k-1] + 1;
      }
      // calc i
      y = x - k;
      
      while(x < N && y < M && b.charAt(y) === a.charAt(x)) {
        y++;
        x++;
      }
      // console.log(k, x);
      V[HALF + k] = x;
      
      // exit
      if (x >= N && y >= M) {
        return D;
      }
    }
  }
}