/* Mobile nav toggle */
const toggle = document.querySelector('.nav__toggle');
const links  = document.querySelector('.nav__links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
}

/* Mark active nav link */
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPath || (currentPath === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

/* Booking form submission (placeholder) */
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = bookingForm.querySelector('button[type=submit]');
    btn.textContent = 'Request sent!';
    btn.disabled = true;
    btn.style.background = 'var(--sage-dk)';
    bookingForm.querySelectorAll('input,select,textarea').forEach(el => el.disabled = true);
  });
}
