let x = 53; 
let rezultat;
function spadali()
{			
    if(x>100&&x<15000){
         rezultat= "broj "+x+" je unutar [100,150000]";  
    }
    else{
         rezultat="broj "+x+" nije unutar [100,150000]";
    }
    console.log(rezultat);  
}
spadali();