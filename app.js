function getpin(){
    const pin=Math.round(Math.random()*10000)
    const ispin=pin+'';
    if(ispin.length==4){
        return pin;
    }
    else{
        return getpin;
    }
}

function generatePin(){
   const getvalue= getpin();
   document.getElementById('pin-input').value=getvalue;
};

document.getElementById('key-pad').addEventListener('click',function(event){
    const calcoli=event.target.innerText;
    const keynumber=document.getElementById('number-input');
    if(isNaN(calcoli)){
        if(calcoli =='C'){
            keynumber.value='';
        }
    }
    else{
        const keyinput=keynumber.value;
        const number=keyinput+calcoli;
        keynumber.value=number;
    }
   
});

document.getElementById('submit').addEventListener('click',function(){
    const subin=document.getElementById('pin-input').value;
    const subinput=document.getElementById('number-input').value;
    const eroy=document.getElementById('veriy-s');
    const secosc=document.getElementById('veriy-n');
    if(subin==subinput){
        secosc.style.display='block';
        eroy.style.display='none';
    }
    else{
        eroy.style.display='block';
        secosc.style.display='none';
        
    }
})