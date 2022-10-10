const prvi = {
    a: 333,
    b: 444,
    c: 222
}

const drugi = {
    a: 111,
    b: 232,
    c: 748
}

function usporedi(pr, dr) {
    const kljuc1 = Object.keys(pr);
    const kljuc2 = Object.keys(dr);

    let isti = 0;
    if (kljuc1.length === kljuc2.length) {
        for (let i = 0; i < kljuc1.length; i++) {
            if(kljuc1[i] === kljuc2[i]) 
            isti++;
        }
    }
    if (isti === kljuc1.length) 
    return true;

    return false;
}

console.log(usporedi(prvi, drugi));