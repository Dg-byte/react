// Задание
// 1) Создать функцию возведения квадрат
// 2) Создать функцию на  проверку  четности. Если нечетная, выводится на экран "Это нечетное", для четного "Это четное"
// 3) Создать функцию калькулятор которому передается 3 параметра:
// 1 - x
// 2 - y
// 3 - op ("-"/"")


function kvadrat(){
    Math.pow(x,y);
}


function chetnost(){   
    if(item%2 == 0 ){
        console.log('Это четное');
    }
    else {
        console.log('Это нечетное')
    }
};

function count(x, y, mark) {
    switch (mark) {
      case "*":
        return x * y;
      case "+":
        return x + y;
      case "-":
        return x -y ;
      case "/":
        if (y !== 0) {
          return x / y;
        } else {
          return "не делится на нуль";
        }
    }
  }


function chetnost();
function kvadrat();

