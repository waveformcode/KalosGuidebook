// Navigation dropdown
const btn1 = document.getElementById('dropdown-btn');
const content1 = document.getElementById('dropdown-content');

// Section dropdown
const btn2 = document.getElementById('dropdown-btn-2');
const content2 = document.getElementById('dropdown-content-2');

// Toggle dropdowns
btn1.addEventListener('click', (e) => {
  e.stopPropagation();
  content1.classList.toggle('show');
  content2?.classList.remove('show');
});

btn2?.addEventListener('click', (e) => {
  e.stopPropagation();
  content2.classList.toggle('show');
  content1?.classList.remove('show');
});

// Close both if clicked outside
document.addEventListener('click', () => {
  content1.classList.remove('show');
  content2?.classList.remove('show');
});
