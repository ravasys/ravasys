document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('mode').addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      localStorage.removeItem('mode');
      document.getElementById('mode').classList.remove('bi-sun-fill');
      document.getElementById('mode').classList.add('bi-moon-fill');

    }
    else {
      document.body.classList.add('dark');
      localStorage.setItem('mode', 'dark');
      document.getElementById('mode').classList.remove('bi-moon-fill');
      document.getElementById('mode').classList.add('bi-sun-fill');
    }
  });

  if (localStorage.getItem('mode') != undefined) {
    document.body.classList.add(localStorage.getItem('mode'));
    document.getElementById('mode').classList.remove('bi-moon-fill');
    document.getElementById('mode').classList.add('bi-sun-fill');
  }

});