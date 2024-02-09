 const num = function(){
    let  num1 = Math.floor(Math.random() * 200);
    return num1;

};
console.log(num());
// const num2 = Math.floor(Math.random() * 99);

let No = document.querySelector(".No");
No.addEventListener("mouseenter", () => {
    let topPos = num();
    let leftPos = num() + 10;
    console.log(topPos);
    console.log(leftPos);
    No.style.top = topPos + "px";
    No.style.left = leftPos + "px";
    console.dir(No);
})
