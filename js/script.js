'use strict';

let title = prompt('Как называется ваш проект?', "Название проекта");
let screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
let screenPrice = +prompt('Сколько будет стоить данная работа?', "12000");
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?', "service1");
let servicePrice1 = +prompt('Сколько это будет стоить?', "1200");
let service2 = prompt('Какой дополнительный тип услуги нужен?', "service2");
let servicePrice2 = +prompt('Сколько это будет стоить?', "1200");
let allServicePrices
let rollback = 10
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let rollbackPrice = fullPrice / 100 * rollback
let servicePercentPrice = fullPrice - rollbackPrice

const showTypeOf = function(variable) {
    console.log(variable, typeof variable)
}

const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2
}
allServicePrices = getAllServicePrices()

function getFullPrice() {
    return screenPrice + allServicePrices
}
fullPrice = getFullPrice()

const getTitle = function() {
    let titleArrUpperCase = title.split('')[0].toUpperCase()
    let titleCut = title.slice(1).toLowerCase();
    title = titleArrUpperCase + titleCut
    return title
}
title = getTitle()

const getServicePercentPrices = function() {
    return fullPrice - rollbackPrice
}
servicePercentPrice = getServicePercentPrices()

const getRollbackMessage = function(price) {
    if (price >= 30000) {
        return 'Даем скидку в 10%'
    } else if (price >= 15000 && price < 30000) {
        return 'Даем скидку в 5%'
    } else if (price >=0 && price < 15000) {
        return 'Скидка не предусмотрена'
    } else {
        return 'Что то пошло не так'
    }  
}

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(typeof title)
console.log(typeof screenPrice)
console.log(typeof adaptive)

console.log(screens.split(' '))

console.log(getRollbackMessage(fullPrice))
console.log(servicePercentPrice)

