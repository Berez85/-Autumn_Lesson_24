'use strict'



// Ответ на задачу №4
let showMessage
if (2 > 1) {
	showMessage = function () {
		console.log('Сообщение');
	}
}
if (showMessage) {
	showMessage();
}

//==============================================Массивы в JAVASCRIPT==============================================

// Задача 1 ------------------------
// let arr = ['Ваня','Иштван','Оля',];
// let newArr = arr;
// newArr.push('Петя');
// console.log(arr.length);

// Задача 2
// let users = ['Ваня','Иштван',];
// let newUsers = users.concat('Оля');
// newUsers.splice(1,1,'Петя');
// let removed = newUsers.splice(0,1);
// console.log(removed);
// newUsers.splice(0,0,'Маша','Паша');
// console.log(newUsers)

// Задача 3
// let arr  = ['Ваня','Иштван','Оля',];
// let removed = arr.splice(1,1);
// console.log(removed);

// Задача 4
// let str = 'Ваня,Иштван,Оля';
// let arr = str.split(',');
// console.log(arr);

// Задача 5
// let arr = [9,2,8];
// let reduceValue = arrTwo.reduce(function(previousValue,item,index,array){
// 	console.log (previousValue);
// });

//===============================================avaScript Document object model (DOM)==================================

// Задача 1 

const elemsOne = document.querySelector('[data-say-hi');
if (elemsOne) { console.log(elemsOne.dataset.sayHi) };

// Задача 2
const list = document.querySelectorAll('li');
let names = 'Нет такого имени';
list.forEach(li => { if (li.textContent.toLowerCase() == 'йончи') return names = li })
console.log(names);

// Задача 3
// const elemCol = document.querySelector('.like');
// console.log(elemCol);

// Задача 4
//const list = document.querySelector('ul');
//list.insertAdjacentHTML(
//'beforeend',
//'<li>Текст</li>');

//========================JavaScript размеры прокрутка и координаты элементов на странице и окна браузера.================

// Задача 1
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
console.log(mainElementWidth);
const windowWidth = window.innerWidth;
console.log(windowWidth);
let scrollWidth = windowWidth - mainElementWidth
console.log(scrollWidth);

// Задача 2
function setScrolltoOptions() {
	window.scrollTo({
		top: 100,
		left: 0,
		behavior: "smooth",
	})
	setTimeout(setScrolltoOptions, 1000);
}

// Задача 3
const like = document.querySelector('.like');
const getlikeCoord = like.getBoundingClientRect();
console.log(getlikeCoord);
const title = document.querySelector('.header__title');
const getTitleCoord = title.getBoundingClientRect();
console.log(getTitleCoord);
const item = document.querySelector('.item');
const getItemCoord = item.getBoundingClientRect();
console.log(getItemCoord);