

function add(a, b, ...sid) {
   let ans = 0;
   ans = ans + a + b;
   for(const val of sid) {
      ans = ans + val;
   }
   console.log(ans);
};

add(2, 3, 5, 6, 10, 12,52,14);

function mull(a, b, ...sid) {
   let ans = 1;
   ans = ans * a * b;
   for(const val of sid) {
      ans = ans * val;
   }
   console.log(ans);
};

mull(2, 3, 5, 6, 10, 12, 52, 14);
