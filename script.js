 const num = function(){
    let  num1 = Math.floor(Math.random() * 200);
    return num1;

};
// console.log(num());
// const num2 = Math.floor(Math.random() * 99);

let No = document.querySelector(".No");
No.addEventListener("mouseenter", () => {
    let topPos = num();
    let leftPos = num() + 10;
    // console.log(topPos);
    // console.log(leftPos);
    No.style.top = topPos + "px";
    No.style.left = leftPos + "px";

    if(topPos - leftPos <= 15 || leftPos - topPos <= 15){
        topPos += topPos;
    }

    // console.dir(No);
})
let arr = [
    "Ek baar or soch lo...",
    "Maan jao please...",
    "Tum jo bologi wo karung...",
    "Akhri baar bol rha hu maan lo meri baat.."
]
let count = 0;
No.addEventListener("click", function(){
    alert(arr[count]);
    count++;
    if(count==arr.length){
        count = 0;
    }
    
    user();
})

let user = function(){
    let topPos = num();
    let leftPos = num() + 10;
    // console.log(topPos);
    // console.log(leftPos);
    No.style.top = topPos + "px";
    No.style.left = leftPos + "px";

    if(topPos - leftPos <= 15 || leftPos - topPos <= 15){
        topPos += topPos;
    }
}