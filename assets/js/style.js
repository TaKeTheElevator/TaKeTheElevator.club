$(function () {
    window.setTimeout(function () {
      $('.preloader').addClass('hide-loader');
      $('.content').addClass('show-content');
    }, 1500);
    window.setTimeout(function () {
      $('.preloader').addClass('kill-loader');
    }, 2000);
  });


  document.addEventListener('DOMContentLoaded', function() {
    const target = document.querySelector('steam-user');
    const showModal = () => {
      const modal = document.getElementById('modal');
      if (modal) {
        modal.style.display = 'block';
      }
    };
    const hideModal = () => {
      const modal = document.getElementById('modal');
      if (modal) {
        modal.style.display = 'none';
      }
    };
    target.addEventListener('mouseover', showModal);
    target.addEventListener('mouseout', hideModal);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach((node) => {
            if (node.id === 'modal') {
            }
          });
        }
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const users = document.querySelectorAll('steam-user');
    users.forEach(user => {
      user.addEventListener('mouseover', function() {
        const modalId = user.getAttribute('data-modal-target');
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.style.display = 'block';
        }
      });
      user.addEventListener('mouseout', function() {
        const modalId = user.getAttribute('data-modal-target');
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.style.display = 'none';
        }
      });
    });
  });




  document.addEventListener('DOMContentLoaded', function() {
    var musicButton = document.getElementById('musicButton');
    var musicPlayer = document.getElementById('musicPlayer');
    
    musicButton.addEventListener('click', function() {
      // Проверяем, воспроизводится ли музыка
      if (musicPlayer.paused) {
        musicPlayer.play(); // Воспроизводим музыку
        musicButton.classList.remove('playing'); // Добавляем класс при воспроизведении
      } else {
        musicPlayer.pause(); // Приостановим музыку, если она уже играет
        musicButton.classList.add('playing'); // Удаляем класс при паузе
      }
    });
  });