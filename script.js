console.log("Задание №1")

const etherium = {
    usd: 2811,
    rub: 200612,
    eur: 2666
}

const getRate = currency =>{
    if (currency == "usd"){
        return etherium.usd;
    }
    else if (currency == "rub"){
        return etherium.rub;
    }
    else if (currency == "eur"){
        return etherium.eur;
    }
    else {
        return "error!";
    }
}

if ((getRate("usd") === 2811) && (getRate("rub") === 200612) && (getRate("eur") == 2666)){
    console.log("True");
}
else{
    console.log("False");
}



console.log("Задание №2")

const getValues = words =>{
    const values = Object.values(words);
    const upper = values.map(e => {
        return e.toUpperCase();
    })
    return upper;
}

const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

if (equals(getValues({lang: "JavaScript", course: "third"}), ['JAVASCRIPT', 'THIRD'])){
    console.log("True");
}
else{
    console.log("False");
}



console.log("Задание №3")

const address = {
    street: 'Lenina',
    building: 1,
    flat: 40
}

const getInfo = obj =>{
    const entries = Object.entries(obj);

    return entries;
}

if(equals(getInfo(address), [['street', 'Lenina'], ['building', 1], ['flat', 40]])){
    console.log("True");
}
else{
    console.log("False");
}



console.log("Задание №4")

const joinArrays = (obj1, obj2) =>{
    const newObject = {...obj1, ...obj2};

    return newObject;
}

if(equals(joinArrays({id: 1, type: 'text', length:28}, {name: 'object2', type: 'number'}), {id: 1, type: 'number', length: 28, name: 'object2'})){
    console.log("True");
}
else{
    console.log("False");
}