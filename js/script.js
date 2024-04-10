// ========= Change colors ==========

const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e);

        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

        const button = e.target;

        const id = button.getAttribute("id");

        button.querySelector(".color").classList.add("selected");
    
        image.classList.toggle("changing");

        image.setAttribute("src", `img/iPhone_${id}.jpg`);

        setTimeout(() => {
            image.classList.toggle("changing");
        }, 200);
    });

});


// Mais Informações:
const product = document.querySelectorAll(".info-content");

product.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    })
})


// Carousel - Other products
const btnArrowLeft = document.getElementById("btn-arrow-left");
const btnArrowRight = document.getElementById("btn-arrow-right");
const allCards = document.getElementById("carousel-content");


btnArrowRight.addEventListener("click", (e) => {
    allCards.scrollLeft += 300;

    if (allCards.scrollLeft === 0) {
        btnArrowLeft.style.color = "#ccc";
    } else if (allCards.scrollLeft < 300) {
        btnArrowLeft.style.color = "#ccc";
    } else {
        btnArrowLeft.style.color = "black";
    }
});

btnArrowLeft.addEventListener("click", (e) => {
    allCards.scrollLeft -= 300; 
});


