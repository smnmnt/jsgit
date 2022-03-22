'use strict';

let title
let screens
let screenPrice
let adaptive
let allServicePrices
let fullPrice 
let servicePercentPrice
let service1
let service2
let rollback = 10

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt('Как называется ваш проект?', "Название проекта");
    screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
    do {
        screenPrice = prompt('Сколько будет стоить данная работа?', 12000);
    } while (!isNumber(screenPrice))
    adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function() {
    let sum = 0
    let serviceSum = 0
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?', "service1")
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?', "service2")
        }
        do {
            serviceSum = +prompt('Сколько это будет стоить?', 1200);
        } while (!isNumber(serviceSum))
        sum += serviceSum
    }
    return sum
}

const showTypeOf = function(variable) {
    console.log(variable, typeof variable)
}

function getFullPrice() {
    return +screenPrice + +allServicePrices
}

const getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (rollback / 100))
}

const getTitle = function() {
    let firstTitle = title.trim()[0].toUpperCase()
    let secondTitle = title.trim().substring(1).toLowerCase()
    return firstTitle + secondTitle
}

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

asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()
title = getTitle()

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(typeof title)
console.log(typeof screenPrice)
console.log(typeof adaptive)

console.log(screens.split(' '))
console.log(getRollbackMessage(fullPrice))
console.log(servicePercentPrice)

