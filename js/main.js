const $nav = document.querySelector('.navigate');
const $views = document.querySelectorAll('[data-view]');
const $navBtns = document.querySelectorAll('.navs');

$nav.addEventListener('click', function (event) {
  if (event.target.tagName !== 'A') {
    return;
  }
  const clicked = event.target.id;
  for (let i = 0; i < $views.length; i++) {
    const matchView = $views[i].getAttribute('data-view');
    if (matchView === clicked) {
      $views[i].classList.remove('hidden');
      $navBtns[i].classList.add('clicked');
    } else {
      $views[i].classList.add('hidden');
      $navBtns[i].classList.remove('clicked');
    }
  }
});
