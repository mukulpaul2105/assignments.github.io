
let str = "LEETCODE";
const arr = Array.from(str);
let shf_arr = [];

for(let i = arr.length - 1; 0 <= i; i = i - 1) {
   shf_arr.push(arr[i]);
}

console.log(shf_arr);