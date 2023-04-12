function f1(x, y){
    let v = x / y
    $('#result1').html('<h2>Необходимая скорость '+ (Math.floor(v)) +' км/ч</h2>')
    setTimeout(function(){
    location.reload()
    },2000)
}

$('#but1').click(function (){
    f1($('#in1').val(), $('#in2').val())
    }
)

function f2(x, y){
    let r = x / y
    let rr = x% y
    $('#result2').html('<h2>Денег хватит на '+ (Math.floor(r)) +' шоколадки(ок)</h2>')
    $('#result22').html('<h2>Сдача '+ rr +' рублей</h2>')
    setTimeout(function(){
    location.reload()
    },2000)
}

$('#but2').click(function (){
    f2($('#in3').val(), $('#in4').val())
    }
)


    window.onload = function () {
        $.getJSON("https://www.cbr-xml-daily.ru/daily_json.js", function(data) { // Получаем курс валют
            let s1 = data.Valute.USD.Value; // Получаем Доллар
            let s2 = data.Valute.EUR.Value; // Получаем Евро
            let c = {'USD':s1, 'EUR':s2, 'RUB':'1'}; // Устанавливаем курс валют

        let val = document.getElementById('val'); // Получаем элемент ввода данных
        let currency1 = document.getElementById('cur1'); // Получаем первый селект
        let currency2 = document.getElementById('cur2'); // Получаем второй селект
        let result = document.getElementsByClassName('convert_result')[0]; // Получаем поле куда будем писать результат
        function summ() { // Делаем функцию
            let z = 0;
            if(currency1.value === currency2.value){ // Если оба значения в селектах равны
                result.innerText = val.value; // То просто вписываем данные из поля ввода
            } else {
                if(currency1.value != 'RUB'){ // Если не равны рублю, то
                    z = val.value*c[currency1.value]; // Переводим сумму в рубли
                    result.innerHTML = Math.ceil((z/c[currency2.value])*100)/100; // Делим на курс и округляем до сотых
                } else { // Если не равны
                    result.innerHTML = Math.ceil((val.value*c[currency2.value])*100)/100; // Умножаем на курс и округляем до сотых
                }
            }
        }
        val.oninput = function () { // При вводе данных в поле вызываем функцию.
            summ();
        };
        currency1.onchange = function () { // При смене первого селекта вызываем функцию.
            summ();
        };
        currency2.onchange = function () { // При смене второго селекта вызываем функцию.
            summ();
        }

        });
    }