let cardModul = document.querySelector('.popup');
let modulTitle = document.querySelector('.popup__order-title');
let modulPrice = document.querySelector('.popup__order-price');
let buttonCard = document.querySelectorAll('.catalog__card-button');
let cardTitle = document.querySelectorAll('.catalog__card-title');
let cardPrice = document.querySelectorAll('.catalog__card-price');


// buttonCard.addEventListener("click", () => {
//     cardModul.style.display = "block";
//     console.log(cardTitle);
// })


buttonCard.forEach(element => {
    element.addEventListener("click", () => {
        cardModul.style.display = "block";
        console.log(element);
        modulTitle.innerHTML = element.parentElement.querySelector('.catalog__card-title').innerHTML;
        modulPrice.innerHTML = element.parentElement.querySelector('.catalog__card-price').innerHTML;
    })
});


console.log(buttonCard);