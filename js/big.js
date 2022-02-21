const big = document.querySelector(".bigImg");
const x = document.querySelector("#x");
x.addEventListener("click", () => {
    big.classList.toggle("show");
})
document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", () => {
        big.classList.toggle("show");
        document.querySelector("#big").src = img.src;
    })
})