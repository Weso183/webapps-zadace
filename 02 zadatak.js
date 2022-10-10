let kune = 300;
const konv = 7.52;
let euri;
function convert(num){
    euri = num * konv;
}

function pretvorba(value){
    convert(kune);
    console.log(kune+ "kn je "+euri+"€");  
}
pretvorba(kune);