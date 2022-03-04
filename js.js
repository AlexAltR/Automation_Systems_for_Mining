let clickBlock = document.getElementById("click_block"); //Блок для вставки текста
let invisible = document.getElementById("invisible"); //Блок для невидимости 


// Обработчик события для вставки текста в блок
clickBlock.onclick = function() {
    let text = prompt('Введите текст, который хотите видеть в ячейке');
    clickBlock.textContent = text;
}

// Функция по скрытию блока
invisible.onmouseenter = function() {
    invisible.style.visibility = "hidden";
}

// Шестое задание
const obj = {
    a0:{aa:[3,9], bb:2, cc:{aaa:4,bbb:-5}},
    a1:{aa:[0,8], bb:-7, cc:{aaa:8,bbb:7}},
    a2:{aa:[9,-4], bb:1, cc:{aaa:-1,bbb:8}},
    a3:{aa:[8,-1], bb:7, cc:{aaa:3,bbb:0}},
    a4:{aa:[-4,-2], bb:-2, cc:{aaa:8,bbb:9}}
}
    
function getNumbersFromString(numberString){
    var regx = numberString.match(/-?\d+/g).map(Number); // Создаем массив из чисел, которые были выбраны из строки с помощью регулярного выражения
    // console.log(regx);
    return regx;
  }
  
let numbers = [] // Массив для извлеченных чисел
for(let item in obj) {
    // console.log(JSON.stringify(obj[item]))    
    numbers = numbers.concat(getNumbersFromString(JSON.stringify(obj[item]))) // Вызываем функцию "getNumbersFromString" и помещаем туда значения объектов аi, которые преобразуются в строки
  }
  
  console.log('min = ', Math.min( ...numbers )) // Минимальное значение из массива
  console.log('max = ', Math.max( ...numbers )) // Максимальное значение из массива