let cardModul = document.querySelector('.popup');
let modulImg = document.querySelector('.popup__img');
let modulTitle = document.querySelector('.popup__order-title');
let modulPrice = document.querySelector('.popup__order-price');
let buttonCard = document.querySelectorAll('.catalog__card-button');
let activeCatalog = document.getElementsByClassName('catalog__buttons-btn');
let btnOne = document.getElementById('btn-active-1');
let btnTwo = document.getElementById('btn-active-2');

for (let i = 0; i < buttonCard.length; i++) {
    buttonCard[i].onclick = function() {
        cardModul.style.display = "block";
        modulImg.innerHTML = buttonCard[i].parentElement.querySelector('.catalog__card-pic').innerHTML;
        modulTitle.innerHTML = buttonCard[i].parentElement.querySelector('.catalog__card-title').innerHTML;
        modulPrice.innerHTML = buttonCard[i].parentElement.querySelector('.catalog__card-price').innerHTML;
        document.body.style.overflow = 'hidden';
        document.querySelector('.catalog__card-pic_close').style.display = 'block';
        document.querySelector('.catalog__card-pic_close').onclick = function() {
            cardModul.style.display = "none";
            document.body.style.overflow = '';
        }
    }
};

btnOne.onclick = function() {
    activeCatalog[0].classList.add('catalog__buttons-btn_active');
    activeCatalog[1].classList.remove('catalog__buttons-btn_active');
}

btnTwo.onclick = function() {
    activeCatalog[1].classList.add('catalog__buttons-btn_active');
    activeCatalog[0].classList.remove('catalog__buttons-btn_active');
}