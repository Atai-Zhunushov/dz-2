var arr = [10, 20, 30, 50, 235, 3000]
for (var i = 0; i < arr.length; i++) {
    var Num = String(arr[i])
    if (Num[0] === '1' || Num[0] === '2'|| Num[0] === '5')
    console.log(arr[i])
}

for ( var a = 20; a >= 0; a--)
    console.log(a)

var color = prompt('Введите цвет светофора').toLowerCase().trim();
if (color === 'красный') {
    alert('Стоп!')
} else if (color === 'желтый') {
    alert('Приготовьтесь!')
} else if (color === 'Зеленый') {
    alert('Можно идти!')
} else {
    alert('Нужно вводить цвета!')
}
