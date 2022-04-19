function getAge(age){
    let a = Number.parseInt(age, 10);
    document.getElementById('result_1').innerHTML = a + 1;
}

function getRemainder(a, b){
    let x = Number.parseInt(a, 10);
    let y = Number.parseInt(b, 10);
    let d = a % b;
    document.getElementById('result_2').innerHTML = d;
}

function faceControl(age){
    let a = Number.parseInt(age, 10);
    if (a > 18){
        document.getElementById('result_3').innerHTML = "Welcome";
    }
    else{
        document.getElementById('result_3').innerHTML = "Отказ";
    }
}

function getNextAge(age){
    if (!Boolean(age)){
        document.getElementById('result_4').innerHTML = 0;
    }
    else{
        let a = Number.parseInt(age, 10);
        document.getElementById('result_4').innerHTML = a + 1;
    }
}

function canRide(height){
    document.getElementById('result_5').innerHTML = (height >= 140).toString();
}