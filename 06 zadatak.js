let apps = "web apps vjezbe";
function uzmiString(str){
    let stringArray = str.split(" ");
    let rez="";
    let duljina = stringArray.length;
    for(let i=0; i  < duljina; i++){
        rez+=stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
    }
    console.log(rez);
}
uzmiString(apps);