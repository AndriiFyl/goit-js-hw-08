
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const imgMarkup = creatElements(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imgMarkup);

function creatElements(gallery) {
    return  gallery
        .map(
      ({ preview, original, description }) => 
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>`)
    .join('');
}

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

























// Решение с комментариями======================================================
// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// console.log(galleryItems);



// // получаем ссылку на <div> с классом gallery из HTML
// const galleryContainer = document.querySelector('.gallery');


// // передаем результат  ф-ии creatElements в <div> с классом gallery (передаем разметку)
// // creatElements(galleryItems) -  это вызов ф-ии, а  galleryItems - это аргумент (наш массив объектов - картинок),
// // который мы передаем в ф-ю в параметр gallery.
// const imgMarkup = creatElements(galleryItems);
// galleryContainer.insertAdjacentHTML('beforeend', imgMarkup);

// // создаем ф-ю creatElements, которая будет возвращать разметку наших елементов,
// // и данную разметку будем передавать через innerHTML в наш HTML-файл (см.выше)
// function creatElements(gallery) {
//     return  gallery
//     //   мэпаем наш массив обэектов, перебирая каждый из объектов
//         // сразу же делаем деструктуризацию всех свойств каждого объекта - { preview, original, description }
//         // вносим разметку, которая была предоставлена
//         .map(
//       ({ preview, original, description }) => 
//         `<a class="gallery__item" href="${original}">
//   <img class="gallery__image" 
//   src="${preview}" 
//   alt="${description}" />
// </a>`
//     )
//         // делаем джойн, чтобы получить разметку в виде строки (а не в виде массива, если бы использовали
//         // только мэп)
//     .join('');
// }

// new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });