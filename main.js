let rightElement = document.querySelector('.header__content-links');
let leftElement = document.querySelector('.img');

window.addEventListener("scroll", () => {

    const speed = +rightElement.getAttribute('data-speed')

    rightElement.style.transform = `translateX(${this.scrollY * speed}px)`

    const speedNav = +leftElement.getAttribute('data-speed')

    leftElement.style.transform = `translateX(${this.scrollY * speedNav}px)`


});