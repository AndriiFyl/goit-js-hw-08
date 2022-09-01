import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const imgMarkup = creatElements(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imgMarkup);

function creatElements(galleryParam) {
    return  galleryParam
        .map(
      ({ preview, original, description }) => 
        `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div>`
    )
    .join('') }

galleryContainer.addEventListener("click", clickOnImg);
let modalWindow = null;
function clickOnImg(event) {
    event.preventDefault();

    if (!event.target.classList.contains("gallery__image")) {
        return }
    

    modalWindow = basicLightbox.create(`<img src="${event.target.dataset.source}">`,
        {
            onShow: () => { window.addEventListener("keydown", closeModalWindowByEsc) },
            onClose: () => { window.removeEventListener("keydown", closeModalWindowByEsc)}
        }   
    );
modalWindow.show() }

function closeModalWindowByEsc(event) {
    if (event.code === "Escape") {
        modalWindow.close() }
}




// // Решение с комментариями=============================================================================
// import { galleryItems } from './gallery-items.js';
// // Change code below this line
// console.log(galleryItems);

// // 1 -  получаем ссылку на <div> с классом gallery из HTML-документа >>>>>>>>>>>>>>>>>>>>>>>>>>
// const galleryContainer = document.querySelector('.gallery');

// // передаем результат  ф-ии creatElements в <div> с классом gallery (передаем разметку)
// // creatElements(galleryItems) -  это вызов ф-ии, а  galleryItems - это аргумент (наш массив объектов - картинок),
// // который мы передаем в ф-ю в параметр gallery.
// const imgMarkup = creatElements(galleryItems);
// galleryContainer.insertAdjacentHTML('beforeend', imgMarkup);


// // создаем ф-ю creatElements, которая будет возвращать разметку наших елементов,
// // и данную разметку будем передавать через innerHTML в наш HTML-файл (см.выше)
// function creatElements(galleryParam) {
//     return  galleryParam
//     //   мэпаем наш массив обэектов, перебирая каждый из объектов
//         // сразу же делаем деструктуризацию всех свойств каждого объекта - { preview, original, description }
//         // вносим разметку, которая была предоставлена
//         .map(
//       ({ preview, original, description }) => 
//         `<div class="gallery__item">
//     <a class="gallery__link" href="${original}">
//     <img
//     class="gallery__image"
//     src="${preview}"
//     data-source="${original}"
//     alt="${description}"
//     />
//     </a>
//     </div>`
//     )
//         // делаем джойн, чтобы получить разметку в виде строки (а не в виде массива, если бы использовали
//         // только мэп)
//     .join('');
// }

// // Добавляем слушателя на на весь наш <div> (делегируем а него все события, которые будем получать при 
// // клике на любую из картинок )
// galleryContainer.addEventListener("click", clickOnImg);


// let modalWindow = null;

// // Функция, визивающая открытие модального окна 
// function clickOnImg(event) {
//     event.preventDefault();

//     if (!event.target.classList.contains("gallery__image")) {
//         return;
//     }

// //  в модальном окне через basicLightbox - который встроенный в библиотеку, 
// // создаем елемент img, изображение которого будет в большом размере (возьмем из свойст елемента в разметке)
//     modalWindow = basicLightbox.create(`<img src="${event.target.dataset.source}">`,
//         {
//             onShow: () => { window.addEventListener("keydown", closeModalWindowByEsc) },
//             onClose: () => { window.removeEventListener("keydown", closeModalWindowByEsc)}
//         }   
//     );
    
// modalWindow.show();
// }

// // Функция закрытия модального окна с клавиатуры (Через Esc)
// function closeModalWindowByEsc(event) {
//     if (event.code === "Escape") {
//         modalWindow.close(); 
//     }
// }


























// Решение с Максом======================================================================
// ====================================================================================

// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// // console.log(galleryItems);

// function renderItems(ev) {
//     let html = '';
//     // перебор ел массива и отрисовка ХТМЛ
//     for (const item of galleryItems) {
//         html += `
//         <div class="gallery__item">
//             <a class="gallery__link" href="${item.original}">
//                 <img
//                     class="gallery__image"
//                     src="${item.preview}"
//                     data-source="${item.original}"
//                     alt="${item.description}"
//                 />
//             </a>
//         </div>`;

//         // console.log(item);
//     }
//     // Вставляем ХТМЛ на страницу
//     document.querySelector('div.gallery').innerHTML = html;

//     // перебор всех gallery__link для навешивания обработчика
//     document.querySelectorAll('a.gallery__link').forEach(function (elem) {
//         // вешаем обработчик клика на каждый элемент gallery__link
//         elem.addEventListener('click',  (ev) => {
//             ev.preventDefault();
//             // получаем ссылку на ориг изображение
//             const imgScrOrig = ev.target.href || ev.target.attributes['data-source'].value;
//             // создаём лайтбокс
//             basicLightbox.create(`
//                 <img width="1400" height="900" src="${imgScrOrig}">
//             `).show();
//         });
//     });
// }

// document.addEventListener("DOMContentLoaded", renderItems);