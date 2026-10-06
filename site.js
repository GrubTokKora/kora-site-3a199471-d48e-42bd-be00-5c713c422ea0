/* Shared behaviour: sticky-header shadow and closing the mobile menu after navigation. */
(function () {
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-stuck', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  var menu = document.getElementById('site-menu');
  if (menu && typeof menu.hidePopover === 'function') {
    menu.addEventListener('click', function (e) {
      var link = e.target.closest && e.target.closest('a');
      if (link && menu.matches(':popover-open')) menu.hidePopover();
    });
  }
})();
