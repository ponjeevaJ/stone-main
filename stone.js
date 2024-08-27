// const a=document.querySelector('.but1');
// const b=document.querySelector('.but2');
// const c=document.querySelector('.but3');
const d=document.querySelector('.use');
const ee=document.querySelector('.sys');
const p1=document.querySelector('.play1');
const p2=document.querySelector('.play2');
const btnContainer=document.querySelector('.holl');

let arr=[" ","stone","papper","scissor"]
let user=0;
let com=0;
btnContainer.addEventListener('click',function(e)
{
   
    const val= Math.trunc(Math.random()*3)+1;
    e.preventDefault();
    const clicked=e.target.closest('.but');
    let n=clicked.dataset.roll;
    d.textContent=`${arr[n]}`;
    ee.textContent=`${arr[val]}`;
    console.log(val +"    "+ n);
   if(val===1&&n===2)
   {
       user++;
       
   }
   else if(val==1&& n==3)
   {
        
        com++;
   }
   else if(val==2 && n==1)
   {
         com++;
         
   }
   else if(val==3&& n==1)
    {
         user++;
         
    }
    else if(val==3 && n==2)
    {
        com++;
        
    }
    else if(val==2 && n==3)
        {
            
            user++;
        }
        p1.textContent=`${user}`;
        p2.textContent=`${com}`;

})
