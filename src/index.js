document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const li = document.querySelector(`nav li a[href="#${id}"]`).parentElement;
      if (!li) {
        return;
      }
      if (entry.intersectionRatio > 0) {
        li.classList.add('nav-visible');
      } else {
        li.classList.remove('nav-visible');
      }
      const actives = document.querySelectorAll('.toc li.active');
      const visibles = document.querySelectorAll('.toc li.nav-visible');
      if (actives.length === 1 && visibles.length === 0) {
        return;
      }
      actives.forEach((elm) => { elm.classList.remove('active'); });
      visibles.forEach((elm, i) => {
        if (i === 0) {
          elm.classList.add('active');
        }
      });
    });
  });
  document.querySelectorAll('h2[id], h3[id]').forEach((section) => {
    observer.observe(section);
  });
});
