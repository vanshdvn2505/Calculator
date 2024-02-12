let symbol = document.querySelectorAll('button');
let input = document.getElementById('get');
let arr = Array.from(symbol);
let string = "";

arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })    
})

let symbol2 = document.getElementsByClassName('num');
let brr = Array.from(symbol2);
for(let i=0;i<10;i++){
    brr[i].addEventListener('mouseover',(e)=>{
        brr[i].style.border = '4px solid grey';
    })
    brr[i].addEventListener('mouseout',(e)=>{
        brr[i].style.border = '';
    })
}
