
let count2 = 0;
  function increaseCount1(buttonNumber1) {
    if ((buttonNumber1 === 1)){
      count2++;
      document.getElementById('counter_1').innerText = count2;
    }
      if ((buttonNumber1 === 2)){
      count2++;
      document.getElementById('counter_2').innerText = count2;
      
}
      if ((buttonNumber1 === 3)){
      count2++;
      document.getElementById('counter_3').innerText = count2;
      
}

      if ((buttonNumber1 === 4)){
      count2++;
      document.getElementById('counter_4').innerText = count2;
      
}
console.log(buttonNumber1.id)
    const allbtn = document.querySelectorAll('.card__btn');
    console.log(allbtn)
    allbtn.forEach((buttonInfo,index)=>{
        console.log(buttonInfo .id)
        if(buttonNumber1.id !== buttonInfo.id){ 
            buttonInfo.disabled =true;
        }
         });
  }     


 let count1 = 0;
  function increaseCount(buttonNumber) {
    if ((buttonNumber === 1)){
      count1++;
      document.getElementById('counter1_1').innerText = count1;
    }
      if ((buttonNumber === 2)){
      count1++;
      document.getElementById('counter1_2').innerText = count1;
      
}
      if ((buttonNumber === 3)){
      count1++;
      document.getElementById('counter1_3').innerText = count1;
      
}

      if ((buttonNumber === 4)){
      count1++;
      document.getElementById('counter1_4').innerText = count1;
      
}
console.log(buttonNumber.id)
    const allbtn = document.querySelectorAll('.card__btn1');
    console.log(allbtn)
    allbtn.forEach((buttonInfo,index)=>{
        console.log(buttonInfo .id)
        if(buttonNumber.id !== buttonInfo.id){ 
            buttonInfo.disabled =true;
        }
         });
  }     