import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

// ключ до сховища
const STORAGE_PLAYER_KEY = 'videoplayer-current-time';


// ініціалізація плеєра
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
    


// Зберігаю час відтворення у локальне сховище
const onTimeupdate = function (evt) {
  localStorage.setItem(STORAGE_PLAYER_KEY, evt.seconds);
};


// Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
    player.on('timeupdate', throttle(onTimeupdate, 1000));
// Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
    player.setCurrentTime(localStorage.getItem(STORAGE_PLAYER_KEY) || 0);
    







// Ініціалізація з документації
    // const iframe = document.querySelector('iframe');
    // const player = new Player(iframe);

    // player.on('play', function() {
    //     console.log('played the video!');
    // });

    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });