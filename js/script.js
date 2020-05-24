let a = prompt(" отношение к технике apple?")
let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    body = document.querySelector('body'),
    title = document.querySelector('.title'),
    adv = document.querySelector('.adv'),
    prompt = document.querySelector('.prompt');

// змінив картинку
body.style.backgroundImage = 'url(img/apple_true.jpg)';
prompt.textContent = a;
//видалив рекламу
adv.remove();
//дописав загаловок
title.textContent = 'Мы продаем только подленную технику Apple'


//ств елемент і клас, і добавив його в список
let li = document.createElement('li');
li.classList.add('menu-item');
li.textContent = 'Пятий пункт';
menu.appendChild(li);
//поміняв місцями 
menu.insertBefore(menuItem[1], menuItem[3]);





