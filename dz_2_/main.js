   ///////1

var arr = [10, 20, 30, 50, 235, 3000]
for ( var i = 0; i < arr.length; i++) {
    var num = String(arr[i])
    if (num[0] === '1' || num[0] === '2' || num[0] === '5')  {
        console.log(arr[i])
    }
}
  ////////2

for ( var c = 20 ; c >= 0; c--) {
    console.log(c)
}

  ////////3

var obj = {
    red: 'Стоп!',
    yellow: 'Приготовьтесь',
    green: 'Можете ехать!',
    Error: 'Вводите цвета!'
   }

var lang = prompt("Введите цвет!").trim().toLowerCase()
if (lang === 'красный') {
    alert(obj.red)
}   else if (lang === 'желтый') {
    alert(obj.yellow)
} else if (lang === 'зеленый') {
    alert(obj.green)
} else {
    alert(obj.Error)
}


////////// 4

var array = []
for (var a = 0 ; a <= 10  ; a++) {
    array.push([a])
    console.log(array[a])
}