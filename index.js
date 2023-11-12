const isPalidrone = function (x){
    if (x<0)return false;
 return x === +x.toString().split("").reverse().join("");
 
}
const palidrone = isPalidrone(-3)
console.log(palidrone)