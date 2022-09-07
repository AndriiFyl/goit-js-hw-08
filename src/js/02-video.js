import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay , 1000));
function onPlay({seconds}) {
let stopTimeOfVideo = seconds;
localStorage.setItem('videoplayer-current-time', stopTimeOfVideo)
}

const savedTimeFromStorage = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(savedTimeFromStorage)
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });




// // делаем импорт библиотек
// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// // получаем ссылку из HTML-файла на елемент <iframe>
// const iframe = document.querySelector('#vimeo-player');
// // инициализируем плеер (смотрим в библиотеке)
// const player = new Player(iframe);

// // player.on - метод из библиотеки: первым параметром передаем event - то, что будем
// // делать с плеером - в нашем случае timeupdate - время обновления; вторым - функцию -
// // stopPlayer, которая будет обновлять

// player.on('timeupdate', throttle(onPlay , 1000));
// // Основная функция для метода player.on (из библиотеки)
// function onPlay(stopVideo) {
//   // т.к. stopVideo - это эдинственный параметр, который содержит объект со свойствами
//   // {seconds: 5.713, percent: 0.01, duration: 571.563} - под капотом библиотеки
//   // то в переменной stopTimeOfVideo мы записываем stopVideo.seconds - тоесть обращаемся к значению
//   // свойства объекта - т.к. нам нужно получить секунды - там, где мы остановили наше видео.
//   let stopTimeOfVideo = stopVideo.seconds;
//   console.log(stopTimeOfVideo);
//     // сохраняем в хранилище в ключ videoplayer-current-time наше время,
//     // когда нажимаем на паузу
//     localStorage.setItem('videoplayer-current-time', stopTimeOfVideo)
// }
// // Текущее время получаем из хранилища, передав в скобки ключ, где как свойство
// // указано время в секундах
// const savedTimeFromStorage = localStorage.getItem('videoplayer-current-time');
// console.log(savedTimeFromStorage);
// // Шаблон из билиотеки: метод, который при перезагрузке страницы  возобновит 
// // воспроизведение с сохраненной позиции.
// player
//   .setCurrentTime(savedTimeFromStorage)
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         break;
//       default:
//         break;
//     }
//   });


























