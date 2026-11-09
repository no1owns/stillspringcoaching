const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');
const desktop = window.matchMedia('(min-width: 1200px)');
if (toggle && links) {
  const close = (restoreFocus = false) => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    if (restoreFocus) toggle.focus();
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && links.classList.contains('open')) close(true);
  });
  links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => close()));
  desktop.addEventListener('change', () => close());
}
