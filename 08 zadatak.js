let polje= [3,4,5,6];
function obrni(arr) {
    let rez = [];
    for (let i = arr.length - 1; i >= 0; i--)
        rez.push(arr[i]);

      console.log(...rez);      // Tri tocke ispisuju cijeli array 
  }
  obrni(polje);
 