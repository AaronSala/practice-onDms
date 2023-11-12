const isPalidrone = function (x){
 return x === +x.toString().split("").reverse().join("");
 
}
const palidrone = isPalidrone(1213)
console.log(palidrone)