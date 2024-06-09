let curr="0";
document.querySelector('.text').innerText=curr;
let buttons=document.querySelectorAll("button");
  buttons.forEach((button)=>{
   button.addEventListener('click',(e)=>{
      if(curr=='0') curr="";
      if(e.target.innerHTML=="="){
          try{
          curr=eval(curr);
          document.querySelector('.text').innerText=curr;}
          catch(error){
          curr="0";
          document.querySelector('.text').innerText="ERROR";
      }}
      else if(e.target.innerHTML=="AC"){
        curr="0"
        document.querySelector('.text').innerText=curr; 
    }
    else if(e.target.innerHTML=="DE"){
        curr=curr.toString();
        curr=curr.slice(0,-1);
        if(curr=="") curr="0";
        document.querySelector('.text').innerText=curr; 
    }
      else{
          curr+=e.target.innerHTML;
          if(curr.length<=15)
          document.querySelector('.text').innerText=curr;
          else if(curr.length>21)
          document.querySelector('.text').innerText="Limit Reached!";  
          else{
              let num=BigInt(curr);
              num=parseFloat(num).toExponential();
              curr=num.toString();
              document.querySelector('.text').innerText=curr;
              num=parseFloat(num);
              curr=num.toString();
          }
      }
   });
});
