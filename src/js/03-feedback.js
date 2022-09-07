
import throttle from 'lodash.throttle'
const form = document.querySelector('.feedback-form');
populateTextarea();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 500));

// Ф-я отправки формы
function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
};

    // Ф-я ввода в инпут
    function onInput(evt) {

    let refreshInfoInput = localStorage.getItem('feedback-form-state');
    if (refreshInfoInput) {
        refreshInfoInput = JSON.parse(refreshInfoInput);
    } else {
        refreshInfoInput = {};
    }
    refreshInfoInput[evt.target.name] = evt.target.value;
    
    localStorage.setItem('feedback-form-state', JSON.stringify(refreshInfoInput));
};

// Ф-я заполнения полей формы при перезагрузке страницы
function populateTextarea() {
    const savedInfo = localStorage.getItem('feedback-form-state');
    if (!savedInfo) {
        return;
    }
    const savedInfoObj = JSON.parse(savedInfo);
    Object.entries(savedInfoObj).forEach(([name, value]) => {
        form.elements[name].value = value;
    });
}
// =======================================================================================================================================
// =======================================================================================================================================


// Вариант с доп.занятия======================================================
// ============================================================================
// import storageAPI from './storage';
// var throttle = require('lodash.throttle');

// let form = document.querySelector('.feedback-form');

// initPage()
// form.addEventListener('input', throttle(handleInput, 500));
// form.addEventListener('submit', handleSubmit);

// function handleInput (e) {
//     const {name, value} = e.target;
    
//     let savedData = storageAPI.load('feedback-form-state');
//     savedData = savedData ? savedData : {};
//     savedData[name] = value;
//     storageAPI.save('feedback-form-state', savedData);

//     console.log(handleInput);
// }

// function initPage () {
//    const savedData = storageAPI.load('feedback-form-state');
//     if (!savedData) {
//         return;
//     }
//     Object.entries(savedData).forEach(([name, value]) => {
//         form.elements[name].value = value;
//     })
// }

// function handleSubmit (e) {
//     e.preventDefault();
//     const {
//         elements: {email, message}
//     } = e.currentTarget;

//     console.log({email: email.value, message: message.value});

//     e.currentTarget.reset();
//     storageAPI.remove('feedback-form-state');
// }











// МОЙ ВАРИАНТ с КОММЕНТАМИ========================================================================================
// import throttle from 'lodash.throttle'

// // получаем ссылку на форму из HTML-файла
// const form = document.querySelector('.feedback-form');


// populateTextarea();

// // На форму "вешаем" событие "submit" - отправка формы
// form.addEventListener('submit', onFormSubmit);
// // Ф-я отправки формы==========================================================================================================
// function onFormSubmit(evt) {
//     // удаляем дефолтное значение перезагрузки страницы при отправке формы
//     evt.preventDefault();
//     // После отправки очищаем всю форму
//     evt.currentTarget.reset();
//     // выводим в консоль значения из localStorage в форме объекта при отправке формы
//     console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
//     localStorage.removeItem('feedback-form-state');
// };


// // =============================================================================================================================
// // =============================================================================================================================

// // "Вешаем" на всю нашу форму слушателя с событием на каждый инпут
// form.addEventListener('input', throttle(onInput, 500));
//     // в наш раннее созданный пустой объект как ключ через квадратные скобки (как переменная) запишем имя
//     // инпута, а как значение будет данные, которые в инпут будут вводиться
//     // formData[evt.target.name] = evt.target.value;    //закоментили
    
//     function onInput(evt) {
// // Создадим следующий код, чтобы можно было дописывать в каждый инпут инфу, но существующая инфа в других инпутах не удалялась
//     // получим из localStorage инфу в виде строки
//     let refreshInfoInput = localStorage.getItem('feedback-form-state');
    
//     // Условие: если refreshInfoInput - приводится к true, то есть, если в localStorage что-то было,
//     //  то мы парсим это в объект
//     if (refreshInfoInput) {
//         refreshInfoInput = JSON.parse(refreshInfoInput);
//         // в противном случае (если в localStorage ничего не было), просто создаем пустой объект
//     } else {
//         refreshInfoInput = {};
//     }
//     // далее в наш объект refreshInfoInput дописываем инфу, которую ввели в определенные инпуты
//     refreshInfoInput[evt.target.name] = evt.target.value;
    
//     // и опять добавленную информацию в инпуты формы записываем в локальное хранилище ,
//     // не забыв перевести все в строку - метод JSON.stringify()
//     localStorage.setItem('feedback-form-state', JSON.stringify(refreshInfoInput));
//     // localStorage.setItem('feedback-form-state', JSON.stringify(formData));  //закоментили

// };


// // // Функция, которая при перезагрузке страницы будет заполнять нашу форму,
// // // взяв значения из localStorage=======================================================================================================
// function populateTextarea() {
//          // в переменную savedInfo получааем данные из хранилища: ключ + значение в виде строки
//     const savedInfo = localStorage.getItem('feedback-form-state');
//     if (!savedInfo) {
//         return;
//     }
//  // парсим строку из localStorage в объект
//     const savedInfoObj = JSON.parse(savedInfo);
// //     // через Object.entries мы разбиваем наш объект savedInfoObj на отдельные массивы
// //     // [ключ, значение]
//     //  console.log(savedInfoObj);
// //     // далее через перебирающий метод массива forEach
//     Object.entries(savedInfoObj).forEach(([name, value]) => {
// //         // обращаемся к каждому элементу формы  form.elements и добавляем
// //         // соответсвующие значения в каждый инпут
//         form.elements[name].value = value;
//     });
// }
// // =======================================================================================================================================
// // =======================================================================================================================================
