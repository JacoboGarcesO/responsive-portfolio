const init = () => {
  const navMenu = document.querySelector('.header__menu');
  const navOpenButton = document.querySelector('.header__open');
  const navCloseButton = document.querySelector('.header__close');
  const navMenuLinks = document.querySelectorAll('.header__link');

  navOpenButton.addEventListener('click', addClass.bind(this, navMenu, 'header__menu--active'));
  navCloseButton.addEventListener('click', removeClass.bind(this, navMenu, 'header__menu--active'));

  navMenuLinks.forEach(handleClickNavLink.bind(this, navMenu));
}

const addClass = (element, className) => {
  element.classList.add(className);
}

const removeClass = (element, className) => {
  element.classList.remove(className);
}

const handleClickNavLink = (menu, link) => {
  link.addEventListener('click', removeClass.bind(this, menu, 'header__menu--active'));
}

addEventListener('load', init);