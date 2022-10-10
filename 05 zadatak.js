let polje = [1,2,3,4,5,6,7,8,9,10];
function djv(array){
    let duljina = array.length;
    for(let i=0; i  < duljina; i++){
        if(array[i]%3==0){
            console.log(array[i]);
        }
       
    }
    
        
}
djv(polje);