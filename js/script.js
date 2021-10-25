let cardModul = document.querySelector('.popup');
let modulImg = document.querySelector('.popup__img');
let modulTitle = document.querySelector('.popup__order-title');
let modulPrice = document.querySelector('.popup__order-price');
let buttonCard = document.querySelectorAll('.catalog__card-button');
let cardTitle = document.querySelectorAll('.catalog__card-title');
let cardPrice = document.querySelectorAll('.catalog__card-price');
let cardImg = document.querySelectorAll('.catalog__card-pic');


// buttonCard.forEach(element => {
//     element.addEventListener("click", () => {
//         cardModul.style.display = "block";
//         modulImg.innerHTML = element.parentElement.querySelector('.catalog__card-pic').innerHTML;
//         modulTitle.innerHTML = element.parentElement.querySelector('.catalog__card-title').innerHTML;
//         modulPrice.innerHTML = element.parentElement.querySelector('.catalog__card-price').innerHTML;
//     })
// });


for (let i = 0; i < buttonCard.length; i++) {
    buttonCard[i].onclick = function() {
        cardModul.style.display = "block";
        modulImg.innerHTML = buttonCard[i].parentElement.querySelector('.catalog__card-pic').innerHTML;
        modulTitle.innerHTML = buttonCard[i].parentElement.querySelector('.catalog__card-title').innerHTML;
        modulPrice.innerHTML = buttonCard[i].parentElement.querySelector('.catalog__card-price').innerHTML;
    }
};