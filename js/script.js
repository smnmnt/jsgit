let title = prompt('Как называется ваш проект?')
let screens = prompt('Какие типы экранов нужно разработать?')
let screenPrice = +prompt('Сколько будет стоить данная работа?')
let rollback = 10
let adaptive = confirm('Нужен ли адаптив на сайте?')
let lowerCaseScreens = (screens.toLowerCase())

let service1 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice2 = +prompt('Сколько это будет стоить?')

let fullPrice = screenPrice + servicePrice1 + servicePrice2
let rollbackPrice = fullPrice / 100 * rollback
let servicePercentPrice = fullPrice - rollbackPrice

if (fullPrice >= 30000) {
    alert('Даем скидку в 10%')
} else if (fullPrice >= 15000) {
    alert('Даем скидку в 5%')
} else if (0 < fullPrice) {
    alert('Скидка не предусмотрена')
} else if (fullPrice <= 0) {
    alert('Что то пошло не так')
}

console.log(title, fullPrice, adaptive)
console.log(screens.length)
console.log("Стоимость верстки экранов", screenPrice, "рублей и",
 "Стоимость разработки сайта", fullPrice, "рублей")

console.log(lowerCaseScreens.split(", "))
console.log(rollbackPrice)
console.log(servicePercentPrice)