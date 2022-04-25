function sumArray(arrstr){
    let arr = arrstr.split(' ').map(Number);

    let summ = 0;
    arr.forEach(a=>{
        summ += a;
    });
    document.getElementById('result_1').innerHTML = summ;
}

function getAboveZero(arrstr){
    let arr = arrstr.split(' ').map(Number);

    var b = [];
    arr.forEach(a=>{
        if(a > 0){
            b.push(a);
        }
    });

    document.getElementById('result_2').innerHTML = b;
}

function getPonies(arrstr, name){
    let arr = arrstr.split(' ');

    if (arr.includes(name)){
        document.getElementById('result_3').innerHTML = name;
    }
    else{
        document.getElementById('result_3').innerHTML = "false";
    }
}

function isTxIncluded(arrstr){
    let arr = arrstr.split(' ');
    let cond = false;
    arr.forEach(a=>{
        let b = a.toLowerCase();
        if(b.includes("tx")){
            cond = true;
        }
    });
    if (cond){
        document.getElementById('result_4').innerHTML = "true";
    }
    else{
        document.getElementById('result_4').innerHTML = "false";
    } 
}

function getSizes(arrstr){
    let arr = arrstr.split(' ');

    let b = [];

    arr.forEach(a=>{
        b.push(a.length);
    });

    document.getElementById('result_5').innerHTML = b;
}

function getWithSpaces(arrstr){
    let arr = arrstr.split('#');

    let s = "";
    let summ = 0;

    arr.forEach(a=>{
        s += a + " ";
        summ += a.length;
    });

    let b = [s, summ];
    document.getElementById('result_6').innerHTML = b;
}

function getEpisodes(_name, _amount){
    anime = {
        name: _name,
        amount: _amount
    }

    document.getElementById('result_7').innerHTML = "Аниме " + anime.name 
                                                    + " включает " + anime.amount +" серий";
}

const triple = (a) => {
    document.getElementById('result_8').innerHTML = a * 3;
}

const getAvgGlicose = (arrstr) => {
    let arr = arrstr.split(' ').map(Number);

    let summ = 0.0;
    arr.forEach(a=>{
        summ += a;
    });

    document.getElementById('result_9').innerHTML = summ / arr.length;
}