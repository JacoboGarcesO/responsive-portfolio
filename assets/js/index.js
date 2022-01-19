const init = () => {
  const navMenu = document.querySelector('.header__menu');
  const navOpenButton = document.querySelector('.header__open');
  const navCloseButton = document.querySelector('.header__close');
  const navMenuLinks = document.querySelectorAll('.header__link');
  const skillsContent = document.querySelectorAll('.skills__content');
  const skillsHeader = document.querySelectorAll('.skills__header');

  navOpenButton.addEventListener('click', addClass.bind(this, 'header__menu--active', navMenu));
  navCloseButton.addEventListener('click', removeClass.bind(this, 'header__menu--active', navMenu));

  navMenuLinks.forEach(handleClickNavLink.bind(this, navMenu));

  skillsHeader.forEach(handleClickSkill.bind(this, skillsContent));
}

const addClass = (className, element) => {
  element.classList.add(className);
}

const removeClass = (className, element) => {
  element.classList.remove(className);
}

const handleClickNavLink = (menu, link) => {
  link.addEventListener('click', removeClass.bind(this, 'header__menu--active', menu));
}

const handleClickSkill = (skillsContent, skill) => {
  skill.addEventListener('click', toggleSkillContent.bind(this, skillsContent, skill));
}

const toggleSkillContent = (skillsContent, skill) => {
  skillsContent.forEach(removeClass.bind(this, 'skills__open'));
  skillsContent.forEach(addClass.bind(this, 'skills__close'));
  addClass('skills__open', skill.parentNode);
  removeClass('skills__close', skill.parentNode);
}

addEventListener('load', init);