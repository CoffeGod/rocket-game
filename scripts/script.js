'use strict';
//  ===============================================================================
let canv = document.getElementById("canvas"); // переменная с id canvas`а
let holst = canv.getContext("2d"); // контексттное ориентирование холста

holst.fillRect(0,0,canv.width,canv.height); //Отрисовка прямоугольника
//  ================================================================================
// функция для возвращения рандомного числа в промежутке
function getRandomInt(min, max) {  
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
//  ================================================================================
// Вывод кол-ва очков счета
let player_score = 0;
score.innerHTML = player_score
//  ================================================================================
// игрок
let player_img = new Image(); // создание объекта картинки для игрока
player_img.src = "img/Player Draw.png"; // загрузка файла изображения для игрока
let player_x = 135; // положение игрока по x
let player_y = 375; // положение игрока по y
let player_speed_x = 15; //  скорость игрока по x
let slider = document.getElementById("mainSlider"); // id слайдера
//  ================================================================================
// бот
let BOT_img = new Image(); // сооздание объекта картинки для бота
BOT_img.src = "img/BOT Draw.png"; // загрузка файла изображения для бота
let BOT_x; // положение бота по x
let BOT_y; // положение бота по y
let BOT_speed_x = 0; // скорость бота по x
let BOT_speed_y = 0; // скорость бота по y
let set_BOT_x_pos_arr = []; // массив с рандомными коорднатами бота по x
let set_BOT_y_pos_arr = []; // массив с рандомными коорднатами бота по y
//  ================================================================================
let max_BOTS = 5; // максимальное кол-во ботов    
//  ================================================================================
// Отрисовка игрока
let playerInterval = function() {
    //  отприсовка фона
    holst.fillStyle = "black";
    holst.fillRect(0,0,canv.width,canv.height);

    // отрисовка игрока
    holst.fillStyle = "blue";
    holst.drawImage(player_img, player_x, player_y, 55, 60);
    
    
    leftToggle.onclick = function TurnLeft() { 
            player_x = player_x - player_speed_x; // реализация движения игрока по y
            if (player_x <= 0) player_x = 0;
        // // Откладка
        console.log('Клик по левой кнопке:');
        console.log('');
        console.log('Позиция игрока по x: ' + player_x);
        console.log('Позиция игрока по y: ' + player_y + '(не должна изменяться)');
        console.log('');
        console.log('Массив с рандомными коорднатами бота по x: ' + set_BOT_x_pos_arr);
        console.log('Массив с рандомными коорднатами бота по y: ' + set_BOT_y_pos_arr);
    }
    rightToggle.onclick = function TurnRight() { 
            player_x = player_x + player_speed_x; // реализация движения игрока по x 
            if (player_x + 55 >= 320) player_x = 320 - (55 + (55 / 2));
        // // Откладка
        console.log('Клик по правой кнопке:');
        console.log('');
        console.log('Позиция игрока по x: ' + player_x);
        console.log('Позиция игрока по y: ' + player_y + '(не должна изменяться)');
        console.log('');
        console.log('Массив с рандомными коорднатами бота по x: ' + set_BOT_x_pos_arr);
        console.log('Массив с рандомными коорднатами бота по y: ' + set_BOT_y_pos_arr);
    }

    // // движение влево при движении ползунка
    // function TurnLeft() { 
    //     player_x = slider.value // реализация движения игрока по x
    //     if (player_x <= 0) player_x = 0;
    // // // Откладка
    // // console.log('Клик по левой кнопке:');
    // // console.log('');
    // // console.log('Позиция игрока по x: ' + player_x);
    // // console.log('Позиция игрока по y: ' + player_y + '(не должна изменяться)');
    // // console.log('');
    // // console.log('Массив с рандомными коорднатами бота по x: ' + set_BOT_x_pos_arr);
    // // console.log('Массив с рандомными коорднатами бота по y: ' + set_BOT_y_pos_arr);
    // }
    // TurnLeft();
    // // движение вправо при движении ползунка
    // function TurnRight() { 
    //     player_x = slider.value; // реализация движения игрока по x
    //     if (player_x >= 275) player_x = 275;
    // // // Откладка
    // // console.log('Клик по правой кнопке:');
    // // console.log('');
    // // console.log('Позиция игрока по x: ' + player_x);
    // // console.log('Позиция игрока по y: ' + player_y + '(не должна изменяться)');
    // // console.log('');
    // // console.log('Массив с рандомными коорднатами бота по x: ' + set_BOT_x_pos_arr);
    // // console.log('Массив с рандомными коорднатами бота по y: ' + set_BOT_y_pos_arr);
    // }
    // TurnRight();
}
setInterval(playerInterval, 17); // отрисока анимации игрока
//  ================================================================================
// Событи нажатия стрелок для управления игроком
document.addEventListener('keydown', function(e) {
    // Движение влево
    if( e.keyCode == 37) {
        player_x = player_x - player_speed_x; // реализация движения игрока по y
        if (player_x <= 0) player_x = 0;
    }
    // Движение вправо
    if( e.keyCode == 39) {
        player_x = player_x + player_speed_x; // реализация движения игрока по y
        if (player_x + 55 >= 320) player_x = 320 - 55;
    }

})
//  ================================================================================
// Цикл, задающий рандомные положентя ботов по x и по y
for (let j = 0; j < max_BOTS; j++) {
    BOT_x = getRandomInt(10, 310); // положение бота по x (вычисляется getRandonInt())
    set_BOT_x_pos_arr[j] = BOT_x; // по x

    BOT_y = getRandomInt( -360, 0); // положение бота по y (вычисляется getRandonInt())
    set_BOT_y_pos_arr[j] = BOT_y; // по y
}
//  ================================================================================
// Отрисовка ботов
let BOTInterval = function() {
    // цикл отрисовки нескольких ботов
    for (let i = 0; i < max_BOTS; i++) {
        // Отрисовка бота
        BOT_x = set_BOT_x_pos_arr[i];
        // BOT_y = set_BOT_y_pos_arr[i];
        BOT_y = set_BOT_y_pos_arr[i] += BOT_speed_y; // движение ботов  по y
        holst.drawImage(BOT_img, BOT_x, BOT_y, 55, 60);
        //  ================================================================================
        // Коллизия ботов и игрока при столновении
        // Условие столкновения игрока и бота 
        if (player_x < BOT_x + 55 &&
            player_x + 55 > BOT_x &&
            player_y < BOT_y + 60 &&
            player_y + 60 > BOT_y) {
            player_img.src = "img/BOOM.png"; // замена картинки игрока на другую
            pauseMenu.style.display = 'table'; // открытие меню для вывода резкльтата
            BOT_speed_y = 0; // скорость бота по y
            pauseMenuScore.innerHTML = player_score; // приисваивание очков счета из игры к очкам счета в меню паузы
            navMenuButtons.style.display = 'none'; // скрытие блока с кнопками продолжения игры и ее перезапуска
            menuScoreBlock.style.display = 'table-row'; // показ блока с выводом очков в меню паузы
            resetLevelToggle.style.display = 'block'; // показ resetLevelToggle для пеерзапуска игры
            menuloseText.style.display = 'block'; // показ menuloseText

        } 
        // ================================================================================
        
        if (BOT_y == player_y) score.innerHTML = player_score += 1 // прибавление очка  если условие верно

        // бесконечное движение ботов сверху вниз
        if (BOT_y == 730) { 
            for (let j = 0; j < max_BOTS; j++) {
                BOT_x = getRandomInt(20, 300); // положение бота по x (вычисляется getRandonInt())
                BOT_y = getRandomInt(-360, 0); // положение бота по y (вычисляется getRandonInt())
                set_BOT_x_pos_arr[j] = BOT_x; // запись положений каждого бота по x в массив
                set_BOT_y_pos_arr[j] = BOT_y; // запись положений каждого бота по y в массив
            }
        }
    }
        
    
}
setInterval(BOTInterval, 17); // отрисока анимации ботов
// Меню паузы
// Нажатие кнопки паузы
function OpenPauseMenu() {
    pauseMenu.style.display = 'table'; 
    BOT_speed_y = 0; // скорость бота по y
}
// нажатие кнопки "play"
function PlayGame() {
    pauseMenu.style.display = 'none';
    BOT_speed_y = 1; // скорость бота по y
}
// нажатие кнопки "Again"
function ResetGame() {
    pauseMenu.style.display = 'none';
    player_score = 0;
    score.innerHTML = player_score
    // slider.value = 137.5; // сброс положения ползунка слайдера
    BOT_speed_y = 1; // скорость бота по y
    player_img.src = "img/Player Draw.png"; // загрузка файла изображения для игрока
    // Для повторного записывания положения ботов 
    for (let j = 0; j < max_BOTS; j++) {
        BOT_x = getRandomInt(20, 300); // положение бота по x (вычисляется getRandonInt())
        BOT_y = getRandomInt(-300, 0); // положение бота по y (вычисляется getRandonInt())
        set_BOT_x_pos_arr[j] = BOT_x; // повторная запись положений каждого бота по x в массив
        set_BOT_y_pos_arr[j] = BOT_y; // повторная запись положений каждого бота по y в массив
    }
    navMenuButtons.style.display = 'block'; // показ блока с кнопками продолжения игры и ее перезапуска
    menuScoreBlock.style.display = 'none'; // скрытие блока с выводом очков в меню паузы
    resetLevelToggle.style.display = 'none'; // скрытие resetLevelToggle для пеерзапуска игры
    menuloseText.style.display = 'none'; // скрытие menuloseText
}
// открытие меню информации
function GameInfo() {
    pauseMenu.style.display = 'none'; // скрытие меню паузы
    infoMenu.style.display = 'table'; // показ меню доп.информации
}
function CloseInfo() {
    pauseMenu.style.display = 'table'; // показ меню паузы
    infoMenu.style.display = 'none'; // скрытие меню доп.информации
}



