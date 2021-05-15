const btnMenu = document.querySelector('.page-header__menu-toggle');
const topLine = document.querySelector('.page-header__topline');

btnMenu.onclick = function (event) {
  event.preventDefault();
  show_hide('main-nav');
  if (topLine.className.includes('--open')) {
    topLine.className='page-header__topline wrapper';
    btnMenu.style.background='url("../img/btn-menu.svg") no-repeat';
  }
  else {
    topLine.className=topLine.className+' page-header__topline--open';
    btnMenu.style.background='url("../img/icon-menu-close.svg") no-repeat right';
  }
};

function show_hide(param) {
  let element = document.querySelector('.'+param);
  let viewstatus = element.getAttribute('data-viewstatus');
  if (viewstatus=='no') {
    element.setAttribute('data-viewstatus','yes');
    element.style.display='block';
  }
  else {
    element.setAttribute('data-viewstatus','no');
    element.style.display='none';
  }
}
