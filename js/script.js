let title = "JavaScript"
let screens = "Простые, Сложные, Интерактивные"
let screenPrice = 12000
let rollback = 30
let fullPrice = 200000
let adaptive = true
let lowerCaseScreens = (screens.toLowerCase())

console.log(title, fullPrice, adaptive)
console.log(screens.length)
console.log("Стоимость верстки экранов", screenPrice, "рублей и",
 "Стоимость разработки сайта", fullPrice, "рублей")

console.log(lowerCaseScreens.split(", "))
console.log(fullPrice * (rollback/100))